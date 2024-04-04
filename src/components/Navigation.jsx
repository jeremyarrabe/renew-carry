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

  // useEffect(() => {
  //   if (visible) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'scroll';
  //   }
  // }, [visible]);

  return (
    <nav className="flex flex-col shadow-sm  sm:px-14 lg:px-[300px] xl:px-[350px] text-maroon">
      <div className="flex min-w-full justify-between  items-center bg-whiteGray px-10 py-5  ">
        <div className="flex items-center ">
          <Link
            className="text-3xl font-bold font-lora-cyrillic"
            href={'/'}
            onClick={visible ? () => toggle() : null}
          >
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
          <div
            className="p-1  rounded-full cursor-pointer stroke-[5.5px] stroke-maroon md:hidden"
            onClick={() => toggle()}
          >
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
                  className={`transition-all duration-300 ease-linear origin-center ${
                    visible ? 'scale-95' : 'rotate-[225deg] -translate-y-2'
                  }`}
                />
                <path
                  id="bottom"
                  d="M22 21L77.1543 76.1543"
                  className={`transition-all duration-300  ease-linear origin-center ${
                    visible ? 'scale-95' : '-rotate-[225deg] translate-y-2  -translate-x-[3px]'
                  }`}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.3,
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  delay: 0.15,
                },
                opacity: {
                  duration: 0.1,
                },
              },
            }}
            className="bg-orange flex flex-col px-10  font-medium"
          >
            <ul className="mt-10 text-2xl flex flex-col gap-8">
              <li>Shop All</li>
              <li>About</li>
              <li>Login</li>
              <span className="border-b-[1px] border-black border-opacity-10" />
              <li className="text-xl pb-5">
                <ul>
                  <li className="opacity-80">Categories</li>
                  <li className="mt-5" onClick={() => toggle()}>
                    <ul className="flex flex-col gap-2">
                      <Link href={'/products/backpack'}>Backpack</Link>
                      <Link href={'/products/handbag'}>Handbag</Link>
                      <Link href={'/products/shoulderbag'}>Shoulder Bag</Link>
                      <Link href={'/products/totebag'}>Tote Bag</Link>
                      <Link href={'/products/hiking bag'}>Hiking Bag</Link>
                      <Link href={'/products/slingbag'}>Sling Bag</Link>
                      <Link href={'/products/laptopbag'}>Laptop Bag</Link>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Nav */}
      {/* <AnimatePresence>
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
      </AnimatePresence> */}
    </nav>
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
