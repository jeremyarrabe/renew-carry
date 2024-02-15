import React from 'react';

const ProductsLoading = () => {
  return (
    <div>
      <div className="flex overflow-auto mt-4 h-10 bg-gray-300 animate-pulse"></div>
      <div className="min-h-96 flex mt-3 px-4 flex-col">
        <div className="flex justify-between items-center ">
          <div className="h-8 w-28 bg-gray-300 animate-pulse"></div>
          <div className="h-8 w-20 bg-gray-300 animate-pulse"></div>
        </div>
        <div className="flex flex-wrap mt-2 justify-around pb-5">
          {[...Array(4).keys()].map((i) => (
            <div
              key={i}
              className="flex flex-col  min-h-52 w-[45%]  bg-gray-300 animate-pulse mt-2 rounded-lg"
              style={{ animationDelay: `${i * 0.05}s`, animationDuration: '1s' }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsLoading;
