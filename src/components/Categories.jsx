import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="flex w-full justify-center bg-darkGreen">
      <div className="container py-20">
        <h2 className="font-lora-cyrillic text-3xl font-medium text-white md:text-5xl">
          Shop by category
        </h2>
        <p className="p-4 text-white/80">Looking for something specific?</p>

        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link
            href={"/products/backpack"}
            className="rounded-lg bg-white px-5 py-2 text-xl font-medium"
          >
            Backpack
          </Link>
          <Link
            href={"/products/handbag"}
            className="rounded-lg bg-white px-5 py-2 text-xl font-medium"
          >
            Handbag
          </Link>
          <Link
            href={"/products/shoulderbag"}
            className="rounded-lg bg-white px-5 py-2 text-xl font-medium"
          >
            Shoulder Bag
          </Link>
          <Link
            href={"/products/tote"}
            className="rounded-lg bg-white px-5 py-2 text-xl font-medium"
          >
            Tote
          </Link>
          <Link
            href={"/products/hikingbag"}
            className="rounded-lg bg-white px-5 py-2 text-xl font-medium"
          >
            Hiking Bag
          </Link>
          <Link
            href={"/products/slingbag"}
            className="rounded-lg bg-white px-5 py-2 text-xl font-medium"
          >
            Sling Bag
          </Link>
          <Link
            href={"/products/laptopbag"}
            className="rounded-lg bg-white px-5 py-2 text-xl font-medium"
          >
            Laptop Bag
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
