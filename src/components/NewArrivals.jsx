import Image from "next/image";
import Link from "next/link";
import HorizontalProductScroll from "./HorizontalProductScroll";

const NewArrivals = () => {
  return (
    <div className="container bg-yellowishGray py-24">
      <h2 className="font-lora-cyrillic text-4xl font-medium text-black md:text-5xl">
        New Arrivals
      </h2>
      <HorizontalProductScroll />
    </div>
  );
};

export default NewArrivals;
