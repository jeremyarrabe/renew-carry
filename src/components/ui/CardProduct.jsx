import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardProduct = ({ href, src, name, category, price }) => {
  return (
    <Link href={href} className="flex h-28 flex-col   ">
      <div className=" relative w-[230px] min-h-[230px] ">
        <Image src={src} alt="" fill className="object-cover rounded-lg" />
      </div>
      <div className="flex  justify-between">
        <div>
          <p className="font-bold text-base">{name}</p>
          <p className="text-sm">{category}</p>
        </div>
        <div className="font-bold text-base">
          <p>${price}.00</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
