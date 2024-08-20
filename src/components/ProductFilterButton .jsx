"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useOptimistic, useState } from "react";

const ProductFilterButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("order") || "recently";

  const handleFilter = (type) => {
    router.push(`?order=${type}`, { scroll: false });
  };

  return (
    <>
      <button
        onClick={() => handleFilter("alphabetically")}
        className={`rounded-lg border-[1px] px-5 py-3 font-bold uppercase tracking-wider ${search === "alphabetically" && "bg-accent"}`}
        disabled={search === "alphabetically"}
      >
        A → Z
      </button>
      <button
        className={`rounded-lg border-[1px] px-5 py-3 font-bold uppercase tracking-wider ${search === "recently" && "bg-accent"}`}
        onClick={() => handleFilter("recently")}
        disabled={search === "recently"}
      >
        Recent
      </button>
    </>
  );
};

export default ProductFilterButton;
