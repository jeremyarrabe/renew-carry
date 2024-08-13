import React from "react";

const ProductLoadingSkeleton = () => {
  return (
    <div className="mt-14 flex flex-wrap justify-around bg-red-500 px-4 pb-5 md:px-20">
      {[...Array(2).keys()].map((i) => (
        <div
          key={i}
          className="mt-2 flex min-h-52 w-[48%] animate-pulse flex-col rounded-lg bg-gray-300"
          style={{ animationDelay: `${i * 0.05}s`, animationDuration: "1s" }}
        ></div>
      ))}
    </div>
  );
};

export default ProductLoadingSkeleton;
