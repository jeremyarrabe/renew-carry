import Link from "next/link";

import VerticalCarousel from "./VerticalCarousel";

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span">test</span>';
  },
};

const Hero = () => {
  // md:mt-20 md:justify-center md:px-20 lg:px-32
  return (
    <div className="container flex h-[90svh] flex-col justify-between bg-yellowishGray pt-36">
      <div className="text-center font-lora-cyrillic text-5xl font-medium text-darkGreen md:text-7xl">
        <div className="flex flex-col md:justify-center lg:flex-row">
          <h1>Sustainable.</h1>
          <h1 className="py-2 md:py-0">Beautiful.</h1>
        </div>
        <h1>Modern.</h1>
      </div>
      <div className="mt-10 text-center text-lg font-light md:mt-20 md:text-2xl">
        <p>
          Discover the beauty of sustainability in our modern bag collection.
          Each piece is crafted with care, combining timeless style with
          eco-friendly materials.
        </p>
      </div>
      <div className="capitalize md:mt-10 md:flex md:flex-row md:items-center md:justify-center md:gap-4">
        <Link
          href={"/products"}
          className="mt-16 flex justify-center rounded-lg bg-darkGreen py-4 text-xl font-bold tracking-wider text-white md:mt-0 md:w-[300px]"
        >
          Shop Now
        </Link>
        <Link
          href={"#whyChooseUs"}
          className="mt-2 flex justify-center rounded-lg border-[1px] border-gray-500/50 py-4 text-xl font-bold md:mt-0 md:w-[200px]"
        >
          Learn More
        </Link>
      </div>
      <VerticalCarousel />
    </div>
  );
};

export default Hero;
