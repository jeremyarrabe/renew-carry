"use client";

import React from "react";
import Tree from "./Tree";
import TreeCircle from "./svg/TreeCircle";
import TreeBlob from "./svg/TreeBlob";
import Image from "next/image";

import girlWithBackpack from "../../public/backpack.png";
import Girl from "./svg/Girl";
import TwoLeaves from "./svg/TwoLeaves";

const NewsLetter = () => {
  const subscribe = (e) => {
    console.log(2);

    e.preventDefault();
  };

  return (
    <div className="container my-4 flex items-center justify-center rounded-md bg-primary py-14">
      <div className="w-[600px]">
        <div className="text-white">
          <h2 className="font-lora-cyrillic text-3xl font-bold">
            Get the Latest in Sustainable Style
          </h2>
          <p className="my-5">
            Get inspired with the latest in sustainable fashion, green living
            tips, and exclusive offers. Sign up to stay connected with our
            eco-conscious community.
          </p>
        </div>
        <form onSubmit={(e) => subscribe(e)} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="renewcarry@gmail.com"
            className="rounded-md p-3"
          />
          <button
            type="submit"
            className="rounded-md bg-accent p-3 text-textColor"
          >
            Subscribe
          </button>
        </form>
        <p className="text-end text-sm text-white">unsubscribe at any time</p>
      </div>
    </div>
  );
};

export default NewsLetter;
