import React from "react";

const CategoryHeader = ({ currentCategory }) => {
  if (currentCategory === undefined)
    return (
      <div className="background-gradient inset-1 flex h-60 shadow-sm md:h-[350px]">
        <div className="flex items-center overflow-hidden font-inter-regular text-6xl font-bold text-maroon sm:text-[110px]">
          <h2 className="flex w-max shrink-0 translate-x-[0%] animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            <span className="transparent-dot mx-20">•</span>
            Handpicked eco-friendly
            <span className="transparent-text">&nbsp;bags</span>
          </h2>
          <h2 className="flex w-max shrink-0 translate-x-[0%] animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            <span className="transparent-dot mx-20">•</span>
            Handpicked eco-friendly
            <span className="transparent-text">&nbsp;bags</span>
          </h2>
        </div>
      </div>
    );

  return (
    <div className="background-gradient inset-1 flex h-60 shadow-sm md:h-[350px]">
      <div className="flex items-center overflow-hidden font-inter-regular text-6xl font-bold capitalize text-maroon sm:text-[110px]">
        <h2 className="flex w-max shrink-0 translate-x-[0%] animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          <span className="transparent-dot mx-20">•</span>
          All {currentCategory}s
        </h2>
        <h2 className="flex w-max shrink-0 translate-x-[0%] animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          <span className="transparent-dot mx-20">•</span>
          All {currentCategory}s
        </h2>
        <h2 className="flex w-max shrink-0 translate-x-[0%] animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          <span className="transparent-dot mx-20">•</span>
          All {currentCategory}s
        </h2>
      </div>
    </div>
  );
};

export default CategoryHeader;
