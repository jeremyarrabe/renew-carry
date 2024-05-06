'use client';
import Button from '@/components/ui/Button';
import { currencyFormat } from '@/helpers/currencyFormat';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { deleteItem, updateQuantity } from '../_actions';
import { useOptimistic } from 'react';

const CartDetails = ({ currentCart }) => {
  const [optimisticCart, addOptimisticCart] = useOptimistic(currentCart, (state, data) => {
    return state.map((item) =>
      item.productId === data.productId ? { ...item, quantity: data.quantity } : item,
    );
  });

  const totalPrice = optimisticCart.reduce(
    (acc, currentItem) => acc + currentItem.product.price * currentItem.quantity,
    0,
  );

  const updateQuantityWithId = async (formData) => {
    const quantity = parseInt(formData.get('quantity'));
    const productId = JSON.parse(formData.get('productId'));

    addOptimisticCart({ quantity, productId });
    await updateQuantity(formData);
  };

  console.log(optimisticCart);
  console.log(currentCart);

  return (
    <>
      <div className="text-center py-10  ">
        <h1 className="text-2xl font-medium font-lora-cyrillic">Cart</h1>
        <p className="mt-2 font-bold">{currentCart.length} Item(s)</p>
      </div>

      <div className="flex flex-col border">
        {optimisticCart && optimisticCart.length > 0 ? (
          optimisticCart.map((item, key) => {
            return (
              <div className="flex py-4 gap-5" key={key}>
                {/* {JSON.stringify(item)} */}
                <div className="relative w-1/3 h-20">
                  <Image
                    src={item.product.image}
                    alt=""
                    fill
                    className="object-cover "
                    sizes="100%"
                  />
                </div>

                <div className="flex flex-col text-lg">
                  <p className="font-medium font-lora-cyrillic">
                    {currencyFormat(item.product.price * item.quantity)}
                  </p>
                  <p className="font-medium font-lora-cyrillic">{item.product.title}</p>
                  <p>{item.product.category}</p>
                  <form className="flex text-base items-center" action={updateQuantityWithId}>
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
                      className="px-4 bg-yellowishGray py-2 "
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

                  <div className="flex mt-4 gap-6">
                    <button>
                      <HeartIcon className="h-6 w-6" />
                    </button>
                    {/* <DeleteForm userId={item.userId} productId={item.productId} /> */}
                    <form action={deleteItem}>
                      <input type="hidden" name="userId" value={item.userId} />
                      <input type="hidden" name="productId" value={item.productId} />
                      <Button type="submit">
                        <TrashIcon className="h-6 w-6 " />
                      </Button>
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
              <Link href={'/products'} className="underline text-blue-500">
                Shop Here
              </Link>
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col mt-4 font-medium gap-1 pb-6">
        <h3 className="text-2xl font-medium font-lora-cyrillic">Summary</h3>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p> {currencyFormat(totalPrice)}</p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Delivery & Handling Fee</p>
          <p>{totalPrice !== 0 ? currencyFormat(10) : currencyFormat(0)}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Total</p>
          <p>{totalPrice !== 0 ? currencyFormat(totalPrice + 10) : currencyFormat(0)}</p>
        </div>
        <button className="bg-transparent  mt-4 text-black border py-4 border-darkGreen rounded-lg">
          Go to Checkout
        </button>
      </div>
    </>
  );
};

export default CartDetails;
