import Link from "next/link";

import Tree from "./Tree";
import TreeBlob from "./svg/TreeBlob";
import TreeCircle from "./svg/TreeCircle";
import TwoLeaves from "./svg/TwoLeaves";
import SingleLeaf from "./svg/SingleLeaf";

const Hero = () => {
  return (
    <main className="container flex min-h-[calc(100svh-90px)] flex-col lg:flex-row">
      <div className="mt-10 flex flex-col justify-center gap-6 md:mt-16 md:gap-1 lg:mt-0 lg:flex-1">
        <h1 className="text-center font-lora-cyrillic text-4xl md:text-6xl">
          Step Into a{" "}
          <span className="relative inline-block font-bold text-primary">
            <TwoLeaves className="absolute -top-[3px] h-6 w-6 -rotate-[18deg]" />
            Greener Future
            <SingleLeaf className="relative -left-1 -top-3 inline-block h-3 w-3 scale-x-[-1] fill-primary" />
          </span>{" "}
          <br />
          With Stylish, <br /> Sustainable Bags
        </h1>

        <div className="text-center md:mt-10">
          <p>
            Discover our collection of eco-friendly bags, where modern design
            meets sustainability. Every piece is crafted with care, ensuring you
            never have to choose between style and ethics.
          </p>
        </div>

        <div className="flex flex-col gap-2 capitalize md:mt-10 md:flex-row lg:flex-row lg:items-center lg:justify-center lg:gap-4">
          <Link
            href={"/products"}
            className="btn-hovered relative flex-1 justify-center rounded-lg bg-primary px-10 py-3 text-center font-lora-regular text-xl font-bold tracking-wide text-white"
          >
            <SingleLeaf className="absolute -left-3 -top-3 h-4 w-4 fill-primary" />
            <TwoLeaves className="absolute -right-2 -top-2 h-6 w-6 rotate-[30deg]" />
            Shop Now
          </Link>
          <Link
            href={"#whyChooseUs"}
            className="btn-hovered flex-1 justify-center rounded-lg bg-accent px-6 py-3 text-center font-lora-regular text-xl font-bold tracking-wide hover:bg-opacity-90"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex flex-[1] items-center justify-center">
        <Tree className="absolute w-20" />
        <TreeCircle className="absolute w-[200px] animate-spinToLeft" />
        <TreeBlob className="w-[450px]" />
      </div>
    </main>
  );
};

export default Hero;
