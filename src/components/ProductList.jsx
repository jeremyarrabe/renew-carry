import { Suspense } from "react";
import CategoryHeader from "./CategoryHeader";
import Product from "./Product";
import ProductFilterButton from "./ProductFilterButton ";
import { getProducts } from "@/lib/services/products";
import { unstable_noStore } from "next/cache";

const ProductList = async ({ orderBy }) => {
  unstable_noStore();
  const productList = await getProducts(null, orderBy);
  return (
    <>
      <div className="container m-auto mt-3 flex min-h-[90svh] flex-col">
        <div className="flex items-center justify-end gap-4 pb-4 pt-6">
          <p className="text-lg">
            <span className="font-medium">{productList.length}</span>{" "}
            <span className="text-sm font-light">items</span>
          </p>
          <div className="hidden gap-4 text-maroon md:flex"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
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
    </>
  );
};

export default ProductList;
