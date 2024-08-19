import Link from "next/link";
import React from "react";

const categoryList = [
  "backpack",
  "handbag",
  "shoulderbag",
  "totebag",
  "hikingbag",
  "slingbag",
  "laptopbag",
];

const ShopByCategory = () => {
  return (
    <div className="flex w-full justify-center bg-textColor">
      <div className="container py-20">
        <h2 className="font-lora-cyrillic text-3xl font-medium text-white md:text-5xl">
          Shop by category
        </h2>
        <p className="py-2 text-white/80">Looking for something specific?</p>

        <div className="mt-2 grid grid-cols-2 gap-3 font-lora-regular md:grid-cols-3">
          {categoryList.map((category) => (
            <Link
              key={category}
              href={"/products/backpack"}
              className="rounded-lg bg-white px-3 py-2 font-medium capitalize xs:text-xl"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
