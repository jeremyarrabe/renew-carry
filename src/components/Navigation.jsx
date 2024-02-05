'use client';
import { useToggle } from '@/hooks/useToggle';
import { mensCategories, womensCategories } from '@/lib/categories';
import {
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [visible, toggleVisibility] = useToggle(true);
  const [menuId, setMenuId] = useState(0);

  return (
    <>
      <div className="flex min-w-full text-black p-4 justify-between  items-center shadow-sm bg-whiteGray  md:px-32 ">
        <div className="flex items-center text-sm">
          {/* <AtSymbolIcon className="h-6 w-6  " /> */}
          <Link className="text-2xl font-bold font-lora-cyrillic" href={'/'}>
            RenewCarry
          </Link>
        </div>
        <div className="flex gap-4 ">
          <div
            className="p-1  rounded-full hover:bg-slate-200 md:hidden"
            onClick={() => toggleVisibility()}
          >
            <Bars3Icon className="h-6 w-6   cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {visible ? (
          <>
            <motion.div
              className={`fixed top-0 min-h-screen min-w-full z-20`}
              initial={{
                translateX: '100px',
                opacity: 0,
              }}
              animate={{ translateX: '0px', opacity: 1 }}
              exit={{ translateX: '100px', opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute right-0 h-screen min-w-[88%] bg-white flex flex-col py-2 px-4 border shadow-lg gap-9 ">
                <div className="flex justify-end">
                  <div
                    className="p-1  rounded-full hover:bg-slate-200 "
                    onClick={() => {
                      toggleVisibility();
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

                <Link
                  href="#"
                  className="flex justify-between items-center cursor-pointer py-1 font-medium text-2xl "
                >
                  <p>Home</p>
                </Link>
                <Link
                  href="#"
                  className="flex justify-between items-center cursor-pointer py-1 font-medium text-2xl "
                >
                  <p>All Products</p>
                </Link>
                <Link
                  href="#"
                  className="flex justify-between items-center cursor-pointer py-1 font-medium text-2xl "
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

const NavMenu = ({ title, handleClick }) => {
  return (
    <Link
      className="flex justify-between items-center cursor-pointer py-1 font-medium text-2xl"
      onClick={handleClick}
    >
      <p>{title}</p>
      <ChevronRightIcon className="h-6 w-6" />
    </Link>
  );
};

export default Navigation;
