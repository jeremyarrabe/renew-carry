'use client';
import HorizontalProductScroll from '@/components/HorizontalProductScroll';
import Product from '@/components/Product';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Image from 'next/image';
import { useState } from 'react';

const ProductId = () => {
  return (
    <div className="flex flex-col px-4">
      <Product
        id={1}
        title={'Title'}
        category={'Backpack'}
        price={100}
        src={
          'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
        description={'This is the product description'}
        size={'Product Sizes'}
      />
      <div className="mt-16">
        <h2 className="text-3xl font-medium text-center">You may also like</h2>
        <HorizontalProductScroll />
      </div>
    </div>
  );
};

export default ProductId;
