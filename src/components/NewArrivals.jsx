import Image from "next/image";
import Link from "next/link";
import HorizontalProductScroll from "./HorizontalProductScroll";

const NewArrivals = () => {
  return (
    <div className="container py-24">
      <h2 className="font-lora-cyrillic text-4xl font-bold md:text-5xl">
        New Arrivals
      </h2>
      <HorizontalProductScroll />
    </div>
  );
};

export default NewArrivals;
