import CardProduct from '@/components/ui/CardProduct';
import CardWrapper from '@/components/ui/CardWrapper';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

const ProductId = () => {
  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-col mt-10">
        <h1 className="text-4xl font-bold">Mal Backpack</h1>
      </div>
      <div className=" relative w-full min-h-[400px] mt-4">
        <Image
          src={
            'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt=""
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex gap-2 items-center">
          <button className="px-10 py-1 rounded-lg text-4xl font-bold">-</button>
          <p className="text-2xl">9</p>
          <button className="px-10 py-1 rounded-lg text-4xl font-bold">+</button>
        </div>
        <div>
          <button className="text-2xl bg-brightOrange px-12 py-3 rounded-lg text-white font-bold">
            Add to cart
          </button>
        </div>
      </div>
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
        <div className="h-80 overflow-auto no-scrollbar">
          <div className="flex pt-6 gap-4">
            <div className="flex h-28 flex-col   ">
              <div className=" relative w-[230px] min-h-[230px] ">
                <Image
                  src={
                    'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  }
                  alt=""
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex  justify-between">
                <div>
                  <p className="font-bold text-base">Mal Backpack</p>
                  <p className="text-sm">Backpack / Hiking</p>
                </div>
                <div className="font-bold text-base">
                  <p>$300.00</p>
                </div>
              </div>
            </div>

            <div className="flex h-28 flex-col">
              <div className=" relative w-[230px] min-h-[230px] ">
                <Image
                  src={
                    'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  }
                  alt=""
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex  justify-between">
                <div>
                  <p className="font-bold text-base">Mal Backpack</p>
                  <p className="text-sm">Backpack / Hiking</p>
                </div>
                <div className="font-bold text-base">
                  <p>$300.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
