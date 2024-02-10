import { useLocalStorage } from '@/hooks/useLocalStorage';
import Image from 'next/image';
import { useState } from 'react';

const Product = ({ id, title, category, price, src, description, size }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItems } = useLocalStorage('cart');

  const handleQuantity = (x) => {
    if (x === 1) {
      setQuantity((prev) => prev + 1);
    }
    if (x === 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToBag = () => {
    const item = {
      id,
      title,
      price,
      category,
      quantity,
    };
    addItems(item);
  };
  return (
    <>
      <div className="flex flex-col mt-10">
        <h1 className="text-3xl font-medium font-lora-cyrillic">{title}</h1>
        <h3 className="text-lg font-medium">{category}</h3>
        <h3 className="text-lg font-bold mt-4">$ {price}.00</h3>
      </div>
      <div className=" relative w-full min-h-[300px] mt-4">
        <Image src={src} alt="" fill className="object-cover rounded-lg" />
      </div>
      <div className="flex justify-between mt-5 gap-1">
        <div className="flex gap-2 items-center grow justify-between">
          <button
            className={`rounded-lg text-4xl font-bold grow`}
            onClick={() => handleQuantity(0)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <p className="text-2xl">{quantity}</p>
          <button
            className="rounded-lg text-4xl font-bold  grow"
            onClick={() => handleQuantity(1)}
            disabled={quantity >= 9}
          >
            +
          </button>
        </div>
        <div className="flex">
          <button
            className="text-lg bg-darkGreen rounded-lg text-white font-bold grow px-2"
            onClick={addToBag}
          >
            Add to cart
          </button>
        </div>
      </div>

      <p className="mt-5">{description}</p>
      <div className="mt-10">
        <h2 className="text-3xl font-medium">Size Guide</h2>
        <p className="mt-5">{size}</p>
      </div>
    </>
  );
};

export default Product;
