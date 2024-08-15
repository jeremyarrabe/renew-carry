"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useOptimistic, useState } from "react";

const ProductFilterButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("order") || "recently";

  // let [optimisticGenres, setOptimisticGenres] = useOptimistic([
  //   {
  //     name: "Button 1",
  //     isActive: false,
  //   },
  //   {
  //     name: "Button 2",
  //     isActive: false,
  //   },
  // ]);

  const handleFilter = (type) => {
    // const currentObj = [ ...obj ];
    // const newObj ={
    //   ...objCopy[id]
    // }
    // currentObj[id] = newObj

    // setOptimisticGenres();

    // const currentList = [...optimisticGenres];
    // let item = { ...currentList[id] };
    // item.isActive = true;
    // currentList[id] = item;
    // setOptimisticGenres(currentList);

    router.push(`?order=${type}`, { scroll: false });
  };

  return (
    <>
      {/* {optimisticGenres.map((obj, key) => {
        return (
          <button
            key={obj.name}
            onClick={() => handleFilter("alphabetically", key)}
            className={`rounded-lg border-[1px] px-5 py-3 font-bold uppercase tracking-wider ${obj.isActive && "bg-red-500"}`}
          >
            {obj.name}
          </button>
        );
      })} */}
      <button
        onClick={() => handleFilter("alphabetically")}
        className={`rounded-lg border-[1px] px-5 py-3 font-bold uppercase tracking-wider ${search === "alphabetically" && "bg-orange"}`}
      >
        A → Z
      </button>
      <button
        className={`rounded-lg border-[1px] px-5 py-3 font-bold uppercase tracking-wider ${search === "recently" && "bg-orange"}`}
        onClick={() => handleFilter("recently")}
      >
        Recent
      </button>
    </>
  );
};

export default ProductFilterButton;
