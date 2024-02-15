import React from 'react';

const ProductLoading = () => {
  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-col mt-10 gap-2">
        <div className="h-10 w-40 bg-gray-300 animate-pulse"></div>
        <div className="h-7 w-28 bg-gray-300 animate-pulse"></div>
        <div className="h-6 w-20 bg-gray-300 animate-pulse"></div>
      </div>
      <div className=" relative w-full min-h-[300px] mt-4 bg-gray-300 animate-pulse"></div>

      <div className="flex justify-between mt-5 gap-2">
        <div className="h-10  bg-gray-300 animate-pulse grow"></div>

        <div className="h-10 w-24 bg-gray-300 animate-pulse "></div>
      </div>

      <div className="h-[100px] w-full bg-gray-300 animate-pulse mt-5  mb-9"></div>
    </div>
  );
};

export default ProductLoading;
