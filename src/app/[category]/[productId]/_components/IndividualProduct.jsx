import HorizontalProductScroll from '@/components/HorizontalProductScroll';
import Button from '@/components/ui/Button';
import { Categories, Products } from '@/server/models';
import { HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import { addItem } from '../_actions';
import { authUser } from '@/lib/auth';
import { currencyFormat } from '@/helpers/currencyFormat';

const IndividualProduct = async ({ productId }) => {
  const userId = authUser;
  const product = await Products.findOne({
    where: {
      id: productId,
    },
    include: [
      {
        model: Categories,
        as: 'categoryDetails',
        attributes: { exclude: [, 'createdAt', 'updatedAt'] },
      },
    ],
    attributes: { exclude: 'categoryId' },
  });
  const addItemWithId = addItem.bind(null, userId, product.id);
  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-col mt-10">
        <h1 className="text-3xl font-medium font-lora-cyrillic">{product.title}</h1>
        <h3 className="text-lg font-medium capitalize">{product.categoryDetails.category}</h3>
        <h3 className="text-lg font-bold mt-4">{currencyFormat(product.price)}</h3>
      </div>
      <div className=" relative w-full min-h-[300px] mt-4">
        <Image src={product.image} alt="" fill className="object-cover rounded-lg" priority />
      </div>
      <div className="flex justify-between mt-5 gap-2">
        <form action={addItemWithId} className="flex grow">
          <Button
            type="submit"
            className="text-lg bg-darkGreen rounded-lg text-white font-bold grow  py-3 px-5 text-center"
          >
            Add to cart
          </Button>
        </form>
        <button className="text-lg rounded-lg text-white font-bold  py-2 px-5 border border-darkGreen">
          <HeartIcon className="h-6 w-6 text-black" />
        </button>
      </div>
      <p className="mt-5">{product.description}</p>
      <div className="mt-10">
        <h2 className="text-3xl font-medium">Size Guide</h2>
        <p className="mt-5">
          <span className="font-medium">Height: </span>
          {product.sizes.height}
        </p>
        <p className="mt-5">
          <span className="font-medium">Width: </span>
          {product.sizes.width}
        </p>
        <p className="mt-5">
          <span className="font-medium">Weight: </span>
          {product.sizes.weight}
        </p>
        <p className="mt-5">
          <span className="font-medium">Depth: </span>
          {product.sizes.depth}
        </p>
        <p className="mt-5">
          <span className="font-medium">Volume: </span>
          {product.sizes.volume}
        </p>
        <p className="mt-5">
          <span className="font-medium">Max Laptop Size: </span>
          {product.sizes.maxLaptopSize}
        </p>
        <p className="mt-5">
          <span className="font-medium">Carry on: </span>
          {product.sizes.carryOnStandards}
        </p>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-medium text-center">You may also like</h2>
        <HorizontalProductScroll />
      </div>
    </div>
  );
};

export default IndividualProduct;
