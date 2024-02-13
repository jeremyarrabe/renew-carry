import { currencyFormat } from '@/helpers/currencyFormat';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Product = ({ id, title, category, price, src, description, dimensions }) => {
  const { addItems } = useLocalStorage('cart');

  const addToBag = () => {
    const item = {
      id,
      title,
      price,
      category,
      quantity: 1,
      src,
    };
    addItems(item);
  };
  return (
    <>
      <div className="flex flex-col mt-10">
        <h1 className="text-3xl font-medium font-lora-cyrillic">{title}</h1>
        <h3 className="text-lg font-medium">{category}</h3>
        <h3 className="text-lg font-bold mt-4">{currencyFormat(price)}</h3>
      </div>
      <div className=" relative w-full min-h-[300px] mt-4">
        <Image src={src} alt="" fill className="object-cover rounded-lg" />
      </div>

      <div className="flex justify-between mt-5 gap-2">
        <button
          className="text-lg bg-darkGreen rounded-lg text-white font-bold grow  py-3 px-5"
          onClick={addToBag}
        >
          Add to cart
        </button>

        <button className="text-lg rounded-lg text-white font-bold  py-2 px-5 border border-darkGreen">
          <HeartIcon className="h-6 w-6 text-black" />
        </button>
      </div>

      <p className="mt-5">{description}</p>
      <div className="mt-10">
        <h2 className="text-3xl font-medium">Size Guide</h2>

        <p className="mt-5">
          <span className="font-medium">Height: </span>
          {dimensions.height}
        </p>
        <p className="mt-5">
          <span className="font-medium">Width: </span>
          {dimensions.width}
        </p>
        <p className="mt-5">
          <span className="font-medium">Weight: </span>
          {dimensions.weight}
        </p>
        <p className="mt-5">
          <span className="font-medium">Depth: </span>
          {dimensions.depth}
        </p>
        <p className="mt-5">
          <span className="font-medium">Volume: </span>
          {dimensions.volume}
        </p>
        <p className="mt-5">
          <span className="font-medium">Max Laptop Size: </span>
          {dimensions.maxLaptopSize}
        </p>
        <p className="mt-5">
          <span className="font-medium">Carry on: </span>
          {dimensions.carryOnStandards}
        </p>
      </div>
    </>
  );
};

export default Product;
