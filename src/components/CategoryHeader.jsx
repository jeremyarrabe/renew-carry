import React from "react";

const CategoryHeader = ({ currentCategory }) => {
  return (
    <div className="background-gradient flex h-[200px] items-center justify-center">
      <div>
        <h1 className="font-lora-cyrillic text-5xl font-bold capitalize">
          {currentCategory !== undefined
            ? `${currentCategory}`
            : "All Products"}
        </h1>
      </div>
    </div>
  );
};

export default CategoryHeader;
