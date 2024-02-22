import ViewProducts from '@/components/ViewProducts';
import { getProducts } from '@/lib/services/products';
import React, { Suspense } from 'react';

const ProductsByCategory = async ({ category }) => {
  const dictionary = {
    backpack: 1,
    handbag: 2,
    shoulderbag: 3,
    totebag: 4,
    slingbag: 5,
    laptopbag: 6,
    hikingbag: 7,
  };

  const productList = await getProducts(dictionary[category]);
  const parsedList = JSON.parse(JSON.stringify(productList));
  return (
    <>
      <ViewProducts products={parsedList} />
    </>
  );
};

export default ProductsByCategory;
