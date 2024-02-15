'use client';
import { currencyFormat } from '@/helpers/currencyFormat';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Product = ({ id, image, title, category, price }) => {
  return (
    <Link href={`/products/${id}`} className="flex flex-col  min-h-52 w-1/2 p-1" key={id}>
      <div className="relative h-full w-full">
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
      <div>
        <p className="font-medium text-base">{title}</p>
        <p className="opacity-95">{category}</p>
        <p className="font-bold">{currencyFormat(price)}</p>
      </div>
    </Link>
  );
};

export default Product;
