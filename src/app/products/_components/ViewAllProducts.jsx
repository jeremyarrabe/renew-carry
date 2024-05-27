import Product from '@/components/Product';
import { getProducts } from '@/lib/services/products';
import React from 'react';

const ViewAllProducts = async () => {
  const productList = await getProducts();
  return (
    <div className="min-h-96 flex mt-3 px-4 flex-col">
      <div className="flex justify-between items-center ">
        <p className="text-lg opacity-85">{productList.length} Results Found</p>
      </div>

      <div className="flex flex-wrap mt-2 justify-between pb-5">
        {productList.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              category={product.categoryDetails.category}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewAllProducts;
