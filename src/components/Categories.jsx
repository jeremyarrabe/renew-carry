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

const Categories = () => {
  return (
    <div className="bg-primary flex w-full justify-center">
      <div className="container py-20">
        <h2 className="font-lora-cyrillic text-3xl font-medium text-white md:text-5xl">
          Shop by category
        </h2>
        <p className="p-4 text-white/80">Looking for something specific?</p>

        <div className="mt-2 grid grid-cols-2 gap-3 font-lora-regular">
          {categoryList.map((category) => (
            <Link
              key={category}
              href={"/products/backpack"}
              className="rounded-lg bg-white px-5 py-2 text-xl font-medium capitalize"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
