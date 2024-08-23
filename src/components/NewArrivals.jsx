import Image from "next/image";
import Link from "next/link";
import HorizontalProductScroll from "./HorizontalProductScroll";
import { getNewArrivals } from "@/lib/services/products";

const NewArrivals = async () => {
  const newArrivals = await getNewArrivals();
  return (
    <div className="container flex flex-col py-24">
      <h2 className="font-lora-cyrillic text-4xl font-bold md:text-5xl">
        <span className="text-primary">New</span> Arrivals
      </h2>
      <HorizontalProductScroll newArrivals={newArrivals} />
    </div>
  );
};

export default NewArrivals;
