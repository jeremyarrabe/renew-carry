'use client';
import Image from 'next/image';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span">test</span>';
  },
};

const Hero = () => {
  return (
    <div className="flex mt-36 flex-col px-4 md:h-[70vh] md:justify-center  bg-yellowishGray md:px-20 md:mt-20">
      <div className=" text-center text-5xl font-lora-cyrillic font-medium text-darkGreen md:text-7xl ">
        <div className="flex flex-col  md:justify-center">
          <h1>Sustainable.</h1>
          <h1 className="py-2 md:py-0">Beautiful.</h1>
        </div>
        <h1>Modern.</h1>
      </div>
      <div className="text-center mt-10 text-lg  md:mt-20 md:text-2xl font-light ">
        <p>
          Discover the beauty of sustainability in our modern bag collection. Each piece is crafted
          with care, combining timeless style with eco-friendly materials.
        </p>
      </div>
      <div className="md:flex md:flex-row md:justify-center md:items-center md:mt-10 md:gap-4 uppercase tracking-wide">
        <Link
          href={'/products'}
          className="flex justify-center mt-16 py-4  bg-darkGreen text-xl rounded-lg font-bold text-white md:mt-0 md:flex-1"
        >
          Shop Now
        </Link>
        <Link
          href={'#whyChooseUs'}
          className="flex justify-center mt-2 py-4  border-[1px] border-gray-500/50  text-xl rounded-lg font-bold md:mt-0 md:flex-1"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
