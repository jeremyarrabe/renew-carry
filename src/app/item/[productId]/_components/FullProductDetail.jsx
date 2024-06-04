'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import AddToCartButton from './AddToCartButton';
import Link from 'next/link';
import { currencyFormat } from '@/helpers/currencyFormat';
import AddToCartModal from './AddToCartModal';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const FullProductDetail = ({ addItemWithId, userId, productId, title, category, price, image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <div className="hidden lg:block bg-pink">
        <div className="flex flex-row h-[calc(100svh-90px)]">
          <div className="relative w-[50%] bg-red-500">
            <Image src={image} alt="item image" fill className="object-cover" priority />
          </div>
          <div className="flex flex-col w-[50%] justify-center grow lg:pr-32 pl-20 text-maroon">
            <h2 className="font-lora-cyrillic text-7xl font-bold">{title}</h2>
            <p className="capitalize text-xl pb-10 pt-2">{category}</p>
            <p className=" text-xl font-bold">{currencyFormat(price)}</p>
            <div className="flex justify-between mt-5 gap-2" ref={ref}>
              {userId ? (
                <form action={addItemWithId} className="flex grow">
                  <AddToCartButton />
                </form>
              ) : (
                <Link
                  href={'/sign-in'}
                  className="text-lg bg-darkGreen rounded-lg text-white font-bold grow  py-3 px-5 text-center "
                >
                  Add to cart
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {!isInView && (
          <AddToCartModal
            userId={userId}
            productId={productId}
            title={title}
            category={category}
            addItemWithId={addItemWithId}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FullProductDetail;
