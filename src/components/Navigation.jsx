'use client';
import { currencyFormat } from '@/helpers/currencyFormat';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useToggle } from '@/hooks/useToggle';
import { getUserCart } from '@/lib/services/users';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const { visible, toggle } = useToggle();
  const [data, setData] = useState();

  const test = () => {};

  console.log(visible);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [visible]);

  return (
    <>
      <div className="flex min-w-full text-maroon px-10 py-5  justify-between  items-center shadow-sm bg-whiteGray sm:px-14 lg:px-[300px] xl:px-[350px] ">
        <div className="flex items-center ">
          {/* <AtSymbolIcon className="h-6 w-6  " /> */}
          <Link className="text-3xl font-bold font-lora-cyrillic" href={'/'}>
            RenewCarry
          </Link>
        </div>
        <div className="flex gap-2 text-xl">
          <Link href={'/shopping-cart'} className="p-1  hover:border-b-2 hidden md:block">
            About
          </Link>
          <Link
            href={'/shopping-cart'}
            className="p-1  rounded-full hover:bg-slate-200 hidden md:block"
          >
            Shop All
          </Link>
          {/* <Link href={'/shopping-cart'} className="p-1  rounded-full hover:bg-slate-200">
            <ShoppingBagIcon className="h-6 w-6   cursor-pointer" />
          </Link> */}
          {/* {<AddedToCart />} */}

          <div
            className="p-1  rounded-full md:block cursor-pointer stroke-[5.5px] stroke-maroon"
            onClick={() => toggle()}
          >
            {/* <Bars3Icon className="h-9 w-9 cursor-pointer stroke-1" /> */}
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidyMid meet"
              shapeRendering="crispEdges"
            >
              <g id="horizontal-bar">
                <path
                  id="top"
                  d="M22 76L77.1543 20.8457"
                  className={`transition-all duration-500 ease-linear origin-center ${
                    visible ? 'scale-95' : 'rotate-[225deg] -translate-y-2'
                  }`}
                />
                <path
                  id="bottom"
                  d="M22 21L77.1543 76.1543"
                  className={`transition-all duration-500  ease-linear origin-center ${
                    visible ? 'scale-95' : '-rotate-[225deg] translate-y-2  -translate-x-[3px]'
                  }`}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {visible ? (
          <>
            <motion.div
              className={`fixed top-[98px] min-h-screen w-full z-20 bg-transparent`}
              initial={{
                translateY: '-100px',
                opacity: 0,
              }}
              animate={{ translateY: '0px', opacity: 1 }}
              exit={{ translateY: '-100px', opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                toggle();
              }}
            >
              <div
                className="absolute right-0 h-screen w-full bg-orange flex flex-col py-2 px-10 border shadow-lg gap-9 font-lora-cyrillic text-maroon"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end"></div>
                {/* <div className="flex gap-2 text-center font-bold ">
                  <Link href="#" className="grow py-2 bg-darkGreen rounded-lg text-white">
                    Log in
                  </Link>
                  <Link
                    href="#"
                    className="grow py-2 text-black  rounded-lg border border-darkGreen"
                  >
                    Sign up
                  </Link>
                </div> */}
                <div className=" flex flex-col gap-8 text-2xl font-medium pb-8 border-b-[1px] border-maroon">
                  <Link
                    href="/"
                    className="flex justify-between items-center cursor-pointer py-1  "
                    onClick={() => {
                      toggle();
                    }}
                  >
                    <p>Home</p>
                  </Link>
                  <Link
                    href="/products"
                    className="flex justify-between items-center cursor-pointer py-1  "
                    onClick={() => {
                      toggle();
                    }}
                  >
                    <p>All Products</p>
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-between items-center cursor-pointer py-1  "
                    onClick={() => {
                      toggle();
                    }}
                  >
                    <p>About</p>
                  </Link>
                </div>
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
