"use client";
import { currencyFormat } from "@/helpers/currencyFormat";
import Image from "next/image";
import Link from "next/link";
import { useOptimistic } from "react";
import { deleteItem, updateQuantity } from "../_actions";
import DeleteButton from "./DeleteButton";

const CartDetails = ({ currentCart }) => {
  const [optimisticCart, addOptimisticCart] = useOptimistic(
    currentCart,
    (state, data) => {
      return state.map((item) =>
        item.productId === data.productId
          ? { ...item, quantity: data.quantity }
          : item,
      );
    },
  );

  const totalPrice = optimisticCart.reduce(
    (acc, currentItem) =>
      acc + currentItem.product.price * currentItem.quantity,
    0,
  );

  const updateQuantityWithId = async (formData) => {
    const quantity = parseInt(formData.get("quantity"));
    const productId = JSON.parse(formData.get("productId"));
    addOptimisticCart({ quantity, productId });
    await updateQuantity(formData);
  };

  return (
    <div className="flex min-h-[calc(100svh-90px)] flex-col">
      <div className="my-10">
        <h1 className="text-center font-lora-cyrillic text-4xl font-medium">
          Cart
        </h1>
        <p className="mt-2 text-right font-bold">
          {currentCart.length} Item(s)
        </p>
      </div>

      <div className="flex flex-col border-y-[1px]">
        {optimisticCart && optimisticCart.length > 0 ? (
          optimisticCart.map((item, key) => {
            return (
              <div
                className="flex items-center justify-between gap-5 py-4 md:justify-evenly"
                key={key}
              >
                <Link
                  className="relative h-[200px] w-[50%] md:h-[400px] md:w-[30%]"
                  href={`/item/${item.product.id}`}
                >
                  <Image
                    src={item.product.image}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="100%"
                  />
                </Link>

                <div className="flex flex-col text-lg">
                  <p className="font-lora-cyrillic font-medium">
                    {currencyFormat(item.product.price * item.quantity)}
                  </p>
                  <Link
                    className="font-lora-cyrillic font-medium"
                    href={`/item/${item.product.id}`}
                  >
                    {item.product.title}
                  </Link>
                  <form
                    className="flex items-center text-base"
                    action={updateQuantityWithId}
                  >
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      type="text"
                      name="userId"
                      id="userId"
                      value={item.userId}
                      className="hidden"
                      readOnly
                    />
                    <input
                      type="text"
                      name="productId"
                      id="productId"
                      value={item.productId}
                      className="hidden"
                      readOnly
                    />
                    <select
                      id="quantity"
                      name="quantity"
                      className="bg-backgroundColor px-4 py-2"
                      defaultValue={item.quantity}
                      onChange={(event) => event.target.form.requestSubmit()}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                  </form>

                  <div className="mt-4 flex h-12 gap-6">
                    {/* <form>
                      <input type="hidden" name="userId" value={item.userId} />
                      <input type="hidden" name="productId" value={item.productId} />
                      <Button type="submit" className="py-2 px-4">
                        <HeartIcon className="w-6 h-6" />
                      </Button>
                    </form> */}
                    <form action={deleteItem}>
                      <input type="hidden" name="userId" value={item.userId} />
                      <input
                        type="hidden"
                        name="productId"
                        value={item.productId}
                      />
                      <DeleteButton />
                    </form>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col justify-center py-10">
            <p className="text-center">
              Cart Empty...
              <Link href={"/products"} className="text-blue-500 underline">
                Shop Here
              </Link>
            </p>
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-1 pb-6 font-medium">
        <h3 className="font-lora-cyrillic text-2xl font-medium">Summary</h3>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p> {currencyFormat(totalPrice)}</p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Delivery & Handling Fee</p>
          {totalPrice !== 0 ? (
            totalPrice >= 50 ? (
              <p>
                <span className="line-through">{currencyFormat(10)}</span>
              </p>
            ) : (
              currencyFormat(10)
            )
          ) : (
            currencyFormat(0)
          )}

          {/* <p>{totalPrice !== 0 ? currencyFormat(10) : currencyFormat(0)}</p> */}
        </div>
        <div className="mt-2 flex justify-between">
          <p>Total</p>

          <p>
            {totalPrice !== 0
              ? totalPrice >= 50
                ? currencyFormat(totalPrice)
                : currencyFormat(totalPrice + 10)
              : currencyFormat(0)}
          </p>
        </div>
        <button className="mt-4 rounded-lg border border-primary bg-transparent py-4">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
