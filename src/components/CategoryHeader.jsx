import React from "react";

const CategoryHeader = ({ currentCategory }) => {
  return (
    // <div className="background-gradient text-maroon">
    //   {/* animate-marquee flex w-full overflow-hidden whitespace-nowrap text-6xl font-bold */}
    //   <div className="animate-marquee flex w-full overflow-hidden whitespace-nowrap">
    //     <p>Sustainable 1</p>
    //     <p>Sustainable 2</p>
    //     <p>Sustainable 3</p>
    //   </div>
    // </div>
    <div className="background-gradient flex h-40 items-center justify-center overflow-hidden">
      <div className="whitespace-nowrap">
        <div className="animate-marquee inline-block pl-[100%] font-lora-cyrillic text-5xl font-bold text-maroon">
          {currentCategory === undefined ? (
            <h1 className="text-center tracking-wide">
              <span className="mx-[100px]">•</span>
              Handpicked eco-friendly bags{" "}
              <span className="transparent-text mx-[100px]">•</span> Choose
              wisely, <span className="transparent-text">Own mindfully</span>
            </h1>
          ) : (
            <h1 className="text-center capitalize tracking-wide">
              All {currentCategory}
              <span className="transparent-text mx-[100px]">• </span>
              All {currentCategory}
              <span className="transparent-text mx-[100px]">• </span>
              All {currentCategory}
              <span className="transparent-text mx-[100px]">• </span>
              All {currentCategory}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
