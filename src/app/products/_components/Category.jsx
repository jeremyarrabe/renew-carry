'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Category = () => {
  const pathname = usePathname();
  return (
    <div className={`flex overflow-auto mt-4 pb-2`}>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`${
            pathname === `/products/${category.category.split(' ').join('')}`
              ? ' /products'
              : `/products/${category.category.split(' ').join('')}`
          }`}
          className={`text-xl py-2 px-4 shrink-0 font-medium rounded-lg capitalize ${
            pathname === `/products/${category.category.split(' ').join('')}`
              ? ' text-darkGreen'
              : 'text-gray-900'
          } `}
        >
          <span
            className={
              pathname === `/products/${category.category.split(' ').join('')}`
                ? 'border-b-2 border-darkGreen  pb-1'
                : ''
            }
          >
            {category.category}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Category;
