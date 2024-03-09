'use client';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import DeleteForm from './DeleteForm';
import Link from 'next/link';
import Image from 'next/image';
import { useOptimistic } from 'react';
import { deleteItem, updateQuantity } from '../_actions';
import { currencyFormat } from '@/helpers/currencyFormat';
import Button from '@/components/ui/Button';

const CartItems = ({ cart }) => {
  const [optimisticCart, addOptimisticCart] = useOptimistic(cart, (state, data) => {
    return state.map((item) =>
      item.productId === data.productId ? { ...item, quantity: data.quantity } : item,
    );
  });

  const updateQuantityWithId = async (formData) => {
    const quantity = parseInt(formData.get('quantity'));
    const productId = JSON.parse(formData.get('productId'));

    addOptimisticCart({ quantity, productId });
    await updateQuantity(formData);
  };
  return (
    <>
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
    </>
  );
};

export default CartItems;
