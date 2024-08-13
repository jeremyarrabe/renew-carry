"use client";
import { currencyFormat } from "@/helpers/currencyFormat";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ id, image, title, category, price }) => {
  return (
    <Link
      href={`/item/${id}`}
      className="my-1 flex flex-col rounded-sm transition-all hover:-translate-y-1 hover:shadow-md"
      key={id}
    >
      <div className="relative h-[250px] w-full md:h-[300px]">
        <Image
          src={image}
          alt=""
          fill
          className="rounded-t-sm object-cover"
          // onLoad={(img) => img.target.classList.remove('blur transition-all blur')}
          sizes="100%"
          priority
        />
      </div>
      <div className="flex flex-col p-2 pb-8 pt-4 font-lora-cyrillic capitalize">
        <div className="flex justify-between">
          <p className="text-xl font-medium">{title}</p>
          <p className="text-lg font-bold">{currencyFormat(price)}</p>
        </div>

        <p className="text-lg font-medium tracking-wider opacity-95">
          {category}
        </p>
      </div>
    </Link>
  );
};

export default Product;
