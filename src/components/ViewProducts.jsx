"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import CategoryHeader from "./CategoryHeader";
import Filter from "./Filter";
import Product from "./Product";
import { useState, useEffect } from "react";

const ViewProducts = ({ products: p, currentCategory }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("order");
  const [products, setProducts] = useState(p);

  const handleFilter = (type) => {
    router.push(`?order=${type}`);
  };

  return (
    <>
      <CategoryHeader currentCategory={currentCategory} />
      <div className="container m-auto mt-3 flex min-h-[90svh] flex-col">
        <div className="flex items-center justify-end gap-4 pb-4 pt-6">
          <p className="text-lg">
            <span className="font-medium">{products.length}</span>{" "}
            <span className="text-sm font-light">items</span>
          </p>
          <div className="hidden gap-4 text-maroon md:flex">
            <button
              onClick={() => handleFilter("alphabetically")}
              className={`rounded-lg border-[1px] px-5 py-3 font-bold uppercase tracking-wider ${search === "alphabetically" && "bg-red-500"}`}
            >
              A → Z
            </button>
            <button
              className={`rounded-lg border-[1px] px-5 py-3 font-bold uppercase tracking-wider ${search === "recently" && "bg-red-500"}`}
              onClick={() => handleFilter("recently")}
            >
              Recent
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
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

export default ViewProducts;
