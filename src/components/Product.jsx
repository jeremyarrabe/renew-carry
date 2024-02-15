'use client';
import { currencyFormat } from '@/helpers/currencyFormat';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Product = ({ id, image, title, category, price }) => {
  return (
    <Link href={`/product/${id}`} className="flex flex-col  min-h-52 w-1/2 p-1" key={id}>
      <div className="relative h-[175px] w-full sm:h-[300px]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover rounded-lg  transition-all blur"
          onLoad={(img) => img.target.classList.remove('blur')}
          sizes="100%"
          priority
        />
      </div>
      <div className="text-base ">
        <p className="font-medium">{title}</p>
        <p className="opacity-95 capitalize">{category}</p>
        <p className="font-bold">{currencyFormat(price)}</p>
      </div>
    </Link>
  );
};

export default Product;
