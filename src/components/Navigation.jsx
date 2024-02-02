'use client';
import {
  ShoppingBagIcon,
  UserIcon,
  Bars3Icon,
  AtSymbolIcon,
  XMarkIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { mensCategories, womensCategories } from '@/lib/categories';
import Link from 'next/link';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <Bars3Icon className="h-6 w-6   cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isNavOpen ? (
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
              <div className="absolute right-0 h-screen min-w-[88%] bg-white flex flex-col py-2 px-4 border shadow-lg gap-2">
                <div className={`flex ${menuId === 0 ? 'justify-end' : 'justify-between'}`}>
                  <div
                    className={`p-1  rounded-full hover:bg-slate-200 ${menuId === 0 && 'hidden'}`}
                    onClick={() => {
                      setMenuId(0);
                    }}
                  >
                    <ChevronLeftIcon className="h-6 w-6  cursor-pointer" />
                  </div>

                  <div
                    className="p-1  rounded-full hover:bg-slate-200 "
                    onClick={() => {
                      setMenuId(0);
                      setIsNavOpen((prev) => !prev);
                    }}
                  >
                    <XMarkIcon className="h-6 w-6  cursor-pointer" />
                  </div>
                </div>

                <NavContent id={0} menuId={menuId}>
                  <NavMenu title={'Menss'} handleClick={() => setMenuId(1)} />
                  <NavMenu title={'Womens'} handleClick={() => setMenuId(2)} />
                </NavContent>
                <NavContent id={1} menuId={menuId}>
                  <div className="flex flex-col gap-2 capitalize font-medium  text-2xl">
                    {mensCategories.map((category) => (
                      <Link key={category.id} href={`/mens/${category.title}`}>
                        {category.title}
                      </Link>
                    ))}
                  </div>
                </NavContent>
                <NavContent id={2} menuId={menuId}>
                  <div className="flex flex-col gap-2 capitalize font-medium  text-2xl">
                    {womensCategories.map((category) => (
                      <Link key={category.id} href={`/womens/${category.title}`}>
                        {category.title}
                      </Link>
                    ))}
                  </div>
                </NavContent>
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
    <div
      className="flex justify-between items-center cursor-pointer py-1 font-medium text-2xl"
      onClick={handleClick}
    >
      <p>{title}</p>
      <ChevronRightIcon className="h-6 w-6" />
    </div>
  );
};

const NavContent = ({ children, id, menuId }) => {
  return (
    <>
      {menuId === id && (
        <motion.div
          className="h-24 w-full  absolute top-10 left-0 py-4 px-4 "
          animate={{ translateX: '0px', opacity: 1 }}
          exit={{ translateX: '100px', opacity: 0 }}
          transition={{ duration: 0.1 }}
          style={{
            translateX: '100px',
            opacity: 0,
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
