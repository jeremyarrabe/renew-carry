'use client';
import HorizontalProductScroll from '@/components/HorizontalProductScroll';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Image from 'next/image';
import { useState } from 'react';

const items = [
  {
    id: 1,
    item: 'Bag',
    price: 300,
  },
];

const ProductId = () => {
  const [quantity, setQuantity] = useState(1);
  const { localStorageItems, addItems, getItems, deleteItems } = useLocalStorage('cart');

  const handleQuantity = (x) => {
    if (x === 1) {
      setQuantity((prev) => prev + 1);
    }
    if (x === 0) {
      setQuantity((prev) => prev - 1);
    }
  };
  console.log(localStorageItems);
  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-col mt-10">
        <h1 className="text-4xl font-bold">Mal Backpack</h1>
      </div>
      <div className=" relative w-full min-h-[300px] mt-4">
        <Image
          src={
            'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt=""
          fill
          className="object-cover rounded-lg"
        />
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
            onClick={() => addItems(items)}
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* {localStorageItems?.map((item, key) => {
        return (
          <p key={key}>
            {item.id}
            {item.item}
            {item.price}
          </p>
        );
      })} */}

      <p className="mt-5">
        Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </p>
      <div className="mt-10">
        <h2 className="text-3xl font-medium">Size Guide</h2>
        <p className="mt-5">
          <b>Dimensions: </b>Between 20-35 liters. <br /> <b>Height:</b> Around 17-19 inches (43-48
          cm) <br /> <b>Width:</b>
          Approximately 12-14 inches (30-35 cm) <br />
          <b>Depth:</b> Roughly 6-8 inches (15-20 cm) <br /> Ideal for: Day hikes, school, or
          weekend getaways. <br /> <b>Fits:</b> Clothing for a day trip, a laptop (up to 15&quot;),
          water bottle (up to 1 liter), snacks, books, notebooks, and additional personal items.
        </p>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-medium text-center">You may also like</h2>
        <HorizontalProductScroll />
      </div>
    </div>
  );
};

export default ProductId;
