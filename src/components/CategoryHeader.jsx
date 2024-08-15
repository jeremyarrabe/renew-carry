import React from "react";

const CategoryHeader = ({ currentCategory }) => {
  if (currentCategory === undefined)
    return (
      <div className="background-gradient inset-1 flex h-60 shadow-sm md:h-[350px]">
        <div className="font-inter-regular flex items-center overflow-hidden text-6xl font-bold text-maroon sm:text-[110px]">
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
          <h2 className="flex w-max shrink-0 translate-x-[0%] animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            <span className="transparent-dot mx-20">•</span>
            Handpicked eco-friendly
            <span className="transparent-text">&nbsp;bags</span>
          </h2>
        </div>
      </div>
    );

  return (
    // <div className="background-gradient text-maroon">
    //   {/* animate-marquee flex w-full overflow-hidden whitespace-nowrap text-6xl font-bold */}
    //   <div className="animate-marquee flex w-full overflow-hidden whitespace-nowrap">
    //     <p>Sustainable 1</p>
    //     <p>Sustainable 2</p>
    //     <p>Sustainable 3</p>
    //   </div>
    // </div>
    // <div className="background-gradient flex h-40 items-center justify-center overflow-hidden md:h-[350px]">
    //   <div className="whitespace-nowrap">
    //     <div className="inline-block animate-[marquee_10s_linear_infinite] pl-[100%] font-lora-cyrillic text-5xl font-bold text-maroon md:text-8xl">
    //       {currentCategory === undefined ? (
    //         <h1 className="text-center tracking-wide">
    //           <span className="mx-[100px]">•</span>
    //           Handpicked eco-friendly bags{" "}
    //           <span className="transparent-text mx-[100px]">•</span> Choose
    //           wisely, <span className="transparent-text">Own mindfully</span>
    //         </h1>
    //       ) : (
    //         <h1 className="text-center capitalize tracking-wide">
    //           <span className="transparent-text">All</span> {currentCategory}s
    //           <span className="transparent-text mx-[100px]">• </span>
    //           <span className="transparent-text">All</span> {currentCategory}s
    //           <span className="transparent-text mx-[100px]">• </span>
    //           <span className="transparent-text">All</span> {currentCategory}s
    //         </h1>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div className="background-gradient flex h-40 md:h-[350px]">
      <div class="flex items-center overflow-hidden font-lora-cyrillic text-4xl font-bold text-maroon sm:text-[110px]">
        <h2 class="flex w-max shrink-0 translate-x-[0%] animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {`All ${currentCategory}s`}
          <span className="transparent-text mx-24">•</span>
        </h2>
        <h2 class="flex w-max shrink-0 translate-x-[0%] animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {`All ${currentCategory}s`}
          <span className="transparent-text mx-24">•</span>
        </h2>
        <h2 class="flex w-max shrink-0 translate-x-[0%] animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {`All ${currentCategory}s`}
          <span className="transparent-text mx-24">•</span>
        </h2>
        <h2 class="flex w-max shrink-0 translate-x-[0%] animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {`All ${currentCategory}s`}
          <span className="transparent-text mx-24">•</span>
        </h2>
        <h2 class="flex w-max shrink-0 translate-x-[0%] animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {`All ${currentCategory}s`}
          <span className="transparent-text mx-24">•</span>
        </h2>
        <h2 class="flex w-max shrink-0 translate-x-[0%] animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {`All ${currentCategory}s`}
          <span className="transparent-text mx-24">•</span>
        </h2>
      </div>
    </div>
  );
};

export default CategoryHeader;
