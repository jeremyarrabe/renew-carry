"use client";
import { useToggle } from "@/hooks/useToggle";
import { SignInButton, SignOutButton, SignedOut, useUser } from "@clerk/nextjs";
import { ShoppingBagIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  default: { height: 0 },
  show: {
    height: "100svh",
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

const desktopCategoryVariant = {
  default: { height: 0 },
  show: {
    height: "100px",
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

const Navigation = () => {
  const [mobileVisible, mobileToggle] = useToggle();
  const [desktopVisible, desktopToggle] = useToggle();

  const showMobileNav = () => {
    mobileToggle();
    if (!mobileVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-whiteGray shadow-sm">
      <nav className="container z-[999] flex h-[90px] w-full items-center justify-center text-maroon">
        <div className="flex min-w-full items-center justify-between">
          <div className="flex items-center">
            <Link className="font-lora-cyrillic text-3xl font-bold" href={"/"}>
              rc
            </Link>
          </div>

          <div className="flex items-center gap-6 text-xl font-medium tracking-wide">
            <button
              className="hidden rounded-lg bg-white px-4 py-2 text-lg font-bold uppercase tracking-wider md:flex md:items-center md:justify-center md:gap-2"
              onClick={() => desktopToggle()}
            >
              Shop By
              <ChevronDownIcon
                className={`h-5 w-5 cursor-pointer text-black transition-all duration-300 ease-out ${
                  mobileVisible ? "rotate-180" : "rotate-0"
                }`}
              />
              {/* <ChevronDownIcon className="h-5 w-5 cursor-pointer text-black  rotate-0 transition duration-150 ease-out" /> */}
            </button>
            <Link
              href={"/about"}
              className="hidden rounded-lg px-4 py-2 text-lg font-bold uppercase tracking-wider md:block"
            >
              About
            </Link>
            <Link
              href={"/products"}
              className="hidden rounded-lg bg-orange px-4 py-2 text-lg font-bold uppercase tracking-wider md:block"
            >
              Shop All
            </Link>

            {/* <Link href={'/about'} className="p-1 hidden md:block">
            About
          </Link> */}
            <Link href={"/shopping-cart"}>
              <ShoppingBagIcon className="h-6 w-6 cursor-pointer text-black" />
            </Link>
            <UserModal />
            <div
              className="cursor-pointer rounded-full stroke-maroon stroke-[5.5px] md:hidden"
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
                    className={`origin-center transition-all duration-300 ease-linear ${
                      mobileVisible
                        ? "scale-95"
                        : "-translate-y-2 rotate-[225deg]"
                    }`}
                  />
                  <path
                    id="bottom"
                    d="M22 21L77.1543 76.1543"
                    className={`origin-center transition-all duration-300 ease-linear ${
                      mobileVisible
                        ? "scale-95"
                        : "-translate-x-[3px] translate-y-2 -rotate-[225deg]"
                    }`}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {desktopVisible && (
          <motion.div
            className="flex bg-red-400"
            variants={desktopCategoryVariant}
            initial="default"
            animate="show"
            exit="hidden"
          >
            <Link href={"/products"} className="font-bold">
              Shop All
            </Link>
          </motion.div>
        )}
        {mobileVisible && (
          <motion.div
            variants={containerVariants}
            initial="default"
            animate="show"
            exit="hidden"
            className="absolute top-[90px] flex h-screen w-screen flex-col overflow-auto bg-orange px-10 font-medium md:hidden"
            onClick={() => showMobileNav()}
          >
            <motion.ul
              variants={linkVariants}
              className="mt-10 flex flex-col gap-8 pb-2 text-2xl"
            >
              <Link href={"/products"} className="font-bold">
                Shop All
              </Link>
              <Link href={"/about"} className="font-bold">
                About
              </Link>
              <SignedOut>
                <SignInButton className="text-left font-bold">
                  Sign In
                </SignInButton>
              </SignedOut>

              <span className="border-b-[1px] border-black border-opacity-10" />
              <li className="pb-5 text-xl">
                <ul>
                  <li className="font-bold">Categories</li>
                  <li className="mt-5">
                    <ul className="flex flex-col gap-2">
                      <Link href={"/products/backpack"}>Backpack</Link>
                      <Link href={"/products/handbag"}>Handbag</Link>
                      <Link href={"/products/shoulderbag"}>Shoulder Bag</Link>
                      <Link href={"/products/totebag"}>Tote Bag</Link>
                      <Link href={"/products/hiking bag"}>Hiking Bag</Link>
                      <Link href={"/products/slingbag"}>Sling Bag</Link>
                      <Link href={"/products/laptopbag"}>Laptop Bag</Link>
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
    </div>
  );
};

const UserModal = () => {
  const { user, isLoaded } = useUser();
  const [visible, toggle] = useToggle();

  return user && isLoaded ? (
    <>
      <div className="h-12 w-12" onClick={() => toggle()}>
        <Image
          width={100}
          height={100}
          src={user.imageUrl}
          alt="Profile Picture"
          className="rounded-full"
        />
      </div>
      {visible ? (
        <div className="fixed right-6 top-[90px] flex h-auto w-[300px] flex-col rounded-lg border-2 bg-white shadow-md">
          <div className="flex flex-row gap-2 bg-darkGreen p-4">
            <Image
              width={70}
              height={70}
              src={user.imageUrl}
              alt="Profile Picture"
              className="rounded-full"
            />
            <div className="flex flex-col justify-center text-sm text-white">
              <p>{user.fullName}</p>
              <p>{user.primaryEmailAddress.emailAddress}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <Link href={"/user-profile"}>Manage Profile</Link>
            <span className="border-t-2" />
            <SignOutButton className="text-left">Sign out</SignOutButton>
          </div>
        </div>
      ) : null}
    </>
  ) : null;
};

export default Navigation;
