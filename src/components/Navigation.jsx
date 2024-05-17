'use client';
import { useToggle } from '@/hooks/useToggle';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';

const containerVariants = {
  default: { height: 0 },
  show: {
    height: '100svh',
    opacity: 1,

    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    height: 0,

    duration: 0.5,
  },
};

const linkVariants = {
  default: { opacity: 0, paddingTop: 0 },
  show: {
    opacity: 1,
    paddingTop: 10,
    transition: { delay: 0.2 },
  },
  hidden: {
    opacity: 0,
    paddingTop: 0,
  },
};

const Navigation = () => {
  const { visible, toggle } = useToggle();
  const { user, isLoaded } = useUser();

  const showMobileNav = () => {
    toggle();
    if (!visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <nav className="flex flex-col fixed w-full shadow-sm text-maroon z-[999]">
      <div className="flex min-w-full justify-between items-center bg-whiteGray px-5 py-5 md:px-20">
        <div className="flex items-center">
          <a className="text-3xl font-bold font-lora-cyrillic" href={'/'}>
            rc
          </a>
        </div>

        <div className="flex gap-6 font-medium items-center tracking-wide text-xl">
          <button className="bg-orange px-4 py-2 rounded-lg hidden md:block">
            <Link href={'/products'} className="uppercase tracking-wider text-sm font-bold">
              Shop All
            </Link>
          </button>

          <Link href={'/about'} className="p-1 hidden md:block">
            About
          </Link>
          <Link href={'/shopping-cart'}>
            <ShoppingBagIcon className="h-6 w-6 cursor-pointer text-black" />
          </Link>
          <UserButton afterSignOutUrl="/" />
          <div
            className="rounded-full cursor-pointer stroke-[5.5px] stroke-maroon md:hidden"
            onClick={() => showMobileNav()}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
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
            variants={containerVariants}
            initial="default"
            animate="show"
            exit="hidden"
            className="absolute w-screen h-screen bg-orange flex flex-col px-10 font-medium top-[90px] overflow-auto"
            onClick={() => showMobileNav()}
          >
            <motion.ul variants={linkVariants} className="mt-10 text-2xl flex flex-col gap-8 pb-2">
              <Link href={'/products'}>Shop All</Link>
              <Link href={'/about'}>About</Link>
              {isLoaded && user ? (
                <Link href={'/login'}>Login</Link>
              ) : (
                <Link href={'/profile'}>Profile</Link>
              )}
              <span className="border-b-[1px] border-black border-opacity-10" />
              <li className="text-xl pb-5">
                <ul>
                  <li className="font-bold">Categories</li>
                  <li className="mt-5">
                    <ul className="flex flex-col gap-2">
                      <Link href={'/products/backpack'}>Backpack</Link>
                      <Link href={'/products/handbag'}>Handbag</Link>
                      <Link href={'/products/shoulderbag'}>Shoulder Bag</Link>
                      <Link href={'/products/totebag'}>Tote Bag</Link>
                      <Link href={'/products/hiking bag'}>Hiking Bag</Link>
                      <Link href={'/products/slingbag'}>Sling Bag</Link>
                      <Link href={'/products/laptopbag'}>Laptop Bag</Link>
                      <br />
                      <br />
                      <br />
                      <br />
                    </ul>
                  </li>
                </ul>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
