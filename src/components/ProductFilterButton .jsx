"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ProductFilterButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("order");

  const handleFilter = (type) => {
    router.push(`?order=${type}`);
  };

  return (
    <>
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
    </>
  );
};

export default ProductFilterButton;
