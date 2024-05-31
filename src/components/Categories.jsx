import Link from 'next/link';
import React from 'react';

const Categories = () => {
  return (
    <div className=" bg-darkGreen mt-16 px-4 py-16 md:px-20 lg:px-32">
      <h2 className="text-3xl font-medium text-white  font-lora-cyrillic  md:text-5xl">
        Shop by category
      </h2>
      <p className="text-white/80 p-4">Looking for something specific?</p>

      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        <Link
          href={'/products/backpack'}
          className="text-xl py-2 px-5 bg-white font-medium rounded-lg"
        >
          Backpack
        </Link>
        <Link
          href={'/products/handbag'}
          className="text-xl py-2 px-5 bg-white font-medium rounded-lg"
        >
          Handbag
        </Link>
        <Link
          href={'/products/shoulderbag'}
          className="text-xl py-2 px-5 bg-white font-medium rounded-lg"
        >
          Shoulder Bag
        </Link>
        <Link href={'/products/tote'} className="text-xl py-2 px-5 bg-white font-medium rounded-lg">
          Tote
        </Link>
        <Link
          href={'/products/hikingbag'}
          className="text-xl py-2 px-5 bg-white font-medium rounded-lg"
        >
          Hiking Bag
        </Link>
        <Link
          href={'/products/slingbag'}
          className="text-xl py-2 px-5 bg-white font-medium rounded-lg"
        >
          Sling Bag
        </Link>
        <Link
          href={'/products/laptopbag'}
          className="text-xl py-2 px-5 bg-white font-medium rounded-lg"
        >
          Laptop Bag
        </Link>
      </div>
    </div>
  );
};

export default Categories;
