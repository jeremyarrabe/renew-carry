'use client';
import Image from 'next/image';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { currencyFormat } from '@/helpers/currencyFormat';
import Link from 'next/link';
import { Suspense } from 'react';

const ShoppingCart = () => {
  const { localStorageItems, updateQuantity, deleteItem } = useLocalStorage('cart');

  const totalPrice = localStorageItems.reduce((accumulator, item) => {
    return (accumulator += item.price * item.quantity);
  }, 0);

  return (
    <div className="flex flex-col px-4">
      <div className="text-center py-10  ">
        <h1 className="text-2xl font-medium font-lora-cyrillic ">Bag</h1>
        <p className="mt-2 font-bold">4 Items | {currencyFormat(totalPrice + 10)}</p>
      </div>
      <div className="flex flex-col border">
        {localStorageItems && localStorageItems.length > 0 ? (
          localStorageItems.map((item) => {
            return (
              <div className="flex py-4 gap-5   " key={item.id}>
                <div className="relative w-1/3 h-20">
                  <Image src={item.src} alt="" fill className="object-cover " />
                </div>

                <div className="flex flex-col text-lg">
                  <p className="font-medium font-lora-cyrillic">{currencyFormat(item.price)}</p>
                  <p className="font-medium font-lora-cyrillic">{item.title}</p>
                  <p>{item.category}</p>
                  <div className="flex text-base">
                    <label htmlFor="quanitity">Quantity</label>
                    <select
                      id="quanitity"
                      name="quanitity"
                      className="px-2 bg-yellowishGray pl-4"
                      defaultValue={item.quantity}
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
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
                  </div>
                  <div className="flex mt-4 gap-6">
                    <button>
                      <HeartIcon className="h-6 w-6" />
                    </button>
                    <button onClick={() => deleteItem(item.id)}>
                      <TrashIcon className="h-6 w-6 " />
                    </button>
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
          <p>{currencyFormat(totalPrice)}</p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Delivery & Handling Fee</p>
          <p>{localStorage && localStorageItems.length > 0 ? '$10.00' : '$0.00'}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Total</p>
          <p suppressHydrationWarning>{currencyFormat(totalPrice + 10)}</p>
        </div>
        <button className="bg-transparentpy-4 mt-4 text-black border py-4 border-darkGreen rounded-lg">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

const LoadingSummary = () => {
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default ShoppingCart;
