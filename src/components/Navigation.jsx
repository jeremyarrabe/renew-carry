'use client';
import { useContext } from 'react';
import { useToggle } from '@/hooks/useToggle';
import { search } from '@/lib/actions';
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Image from 'next/image';
import { currencyFormat } from '@/helpers/currencyFormat';
import { CartContext } from '@/context/context';

const Navigation = () => {
  const { visible, toggle } = useToggle();
  const cart = useContext(CartContext);

  return (
    <>
      <div className="flex min-w-full text-black p-4 justify-between  items-center shadow-sm bg-whiteGray  md:px-32  ">
        <div className="flex items-center text-sm">
          {/* <AtSymbolIcon className="h-6 w-6  " /> */}
          <Link className="text-2xl font-bold font-lora-cyrillic" href={'/'}>
            RenewCarry
          </Link>
        </div>
        <div className="flex gap-4 ">
          <Link
            href={'/shopping-cart'}
            // after:content-['${cart.length}'] after:absolute after:top-[27px] after:right-[77px] after:text-[11px]
            className={`p-1  rounded-full hover:bg-slate-200 `}
          >
            <ShoppingBagIcon className="h-6 w-6   cursor-pointer" />
          </Link>
          {/* {<AddedToCart />} */}

          <div className="p-1  rounded-full hover:bg-slate-200 md:hidden" onClick={() => toggle()}>
            <Bars3Icon className="h-6 w-6   cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {visible ? (
          <>
            <motion.div
              className={`fixed top-0 min-h-screen min-w-full z-20 bg-transparent`}
              initial={{
                translateX: '100px',
                opacity: 0,
              }}
              animate={{ translateX: '0px', opacity: 1 }}
              exit={{ translateX: '100px', opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                toggle();
              }}
            >
              <div
                className="absolute right-0 h-screen min-w-[88%] bg-white flex flex-col py-2 px-4 border shadow-lg gap-9 "
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end">
                  <div
                    className="p-1  rounded-full hover:bg-slate-200 "
                    onClick={() => {
                      toggle();
                    }}
                  >
                    <XMarkIcon className="h-6 w-6  cursor-pointer" />
                  </div>
                </div>
                <div className="flex gap-2 text-center font-bold ">
                  <Link href="#" className="grow py-2 bg-darkGreen rounded-lg text-white">
                    Log in
                  </Link>
                  <Link
                    href="#"
                    className="grow py-2 text-black  rounded-lg border border-darkGreen"
                  >
                    Sign up
                  </Link>
                </div>
                <form className="flex" action={''}>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 px-2 text-base outline-black"
                    name="search"
                  />
                  <button>
                    <MagnifyingGlassIcon className="h-6 w-6 " />
                  </button>
                </form>

                <Link
                  href="/"
                  className="flex justify-between items-center cursor-pointer py-1 font-medium text-2xl "
                  onClick={() => {
                    toggle();
                  }}
                >
                  <p>Home</p>
                </Link>
                <Link
                  href="/products"
                  className="flex justify-between items-center cursor-pointer py-1 font-medium text-2xl "
                  onClick={() => {
                    toggle();
                  }}
                >
                  <p>All Products</p>
                </Link>
                <Link
                  href="#"
                  className="flex justify-between items-center cursor-pointer py-1 font-medium text-2xl "
                  onClick={() => {
                    toggle();
                  }}
                >
                  <p>About</p>
                </Link>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

const AddedToCart = () => {
  const { localStorageItems } = useLocalStorage('cart');
  const lastAddedItem = localStorageItems[localStorageItems.length - 1];

  return (
    <>
      <div className="bg-white h-[170px] w-screen fixed top-[64px] left-0  p-4 z-50 ">
        <div className="flex justify-between">
          <p>✔ Added to bag</p>
          <XMarkIcon className="h-6 w-6  cursor-pointer" />
        </div>
        {lastAddedItem && (
          <div className="flex py-4 gap-5   " key={lastAddedItem.id}>
            <div className="relative w-1/3 h-20">
              <Image src={lastAddedItem.src} alt="" fill className="object-cover " />
            </div>

            <div className="flex flex-col text-lg">
              <p className="font-medium font-lora-cyrillic">
                {currencyFormat(lastAddedItem.price)}
              </p>
              <p className="font-medium font-lora-cyrillic">{lastAddedItem.title}</p>
              <p>{lastAddedItem.category}</p>
            </div>
          </div>
        )}
      </div>
      <div className="h-screen w-screen bg-black fixed top-[64px] left-0 opacity-50 "></div>
    </>
  );
};

export default Navigation;
