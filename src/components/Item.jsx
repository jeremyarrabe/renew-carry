import React from "react";
import HorizontalProductScroll from "./HorizontalProductScroll";
import Image from "next/image";
import AddToCartSticky from "./AddToCartSticky";
import { currencyFormat } from "@/helpers/currencyFormat";
import { Categories, Products } from "@/server/models";

const Item = async ({ productId }) => {
  const product = await Products.findOne({
    where: {
      id: productId,
    },
    include: [
      {
        model: Categories,
        as: "categoryDetails",
        attributes: { exclude: [, "createdAt", "updatedAt"] },
      },
    ],
    attributes: { exclude: "categoryId" },
  });

  if (!productId || !product) return notFound();

  return (
    <>
      <div className="container hidden flex-col md:flex">
        <div className="py-4 capitalize">{`Home / ${product.categoryDetails.category} / ${product.title}`}</div>
        {/* // Tablet and desktop      */}
        <div className="grid grid-cols-2 gap-8">
          <div className="group relative h-[50svh] overflow-hidden rounded-md">
            <Image
              src={product.image}
              alt=""
              fill
              className="object-cover transition-all lg:group-hover:scale-105"
              sizes="100%"
              priority
            />
          </div>
          <div className="flex flex-col gap-4">
            <section className="flex flex-col gap-2">
              <h1 className="text-4xl">{product.title}</h1>
              <p className="mt-2 capitalize">
                {product.categoryDetails.category}
              </p>
              <p className="text-3xl font-bold">
                {currencyFormat(product.price)}
              </p>
              <p>{product.description}</p>
              <div>
                <h2 className="pb-4 text-2xl">Product Size Guide</h2>
                <p>
                  <span className="font-bold">Height:</span>{" "}
                  {product.sizes.height}
                </p>
                <p>
                  <span className="font-bold">Width:</span>{" "}
                  {product.sizes.width}
                </p>
                <p>
                  <span className="font-bold">Weight:</span>{" "}
                  {product.sizes.weight}
                </p>
                <p>
                  <span className="font-bold">Depth:</span>{" "}
                  {product.sizes.depth}
                </p>
                <p>
                  <span className="font-bold">Volume:</span>{" "}
                  {product.sizes.volume}{" "}
                </p>
                <p>
                  <span className="font-bold">Max Laptop Size:</span>{" "}
                  {product.sizes.maxLaptopSize}{" "}
                </p>
                <p>
                  <span className="font-bold">Carry on:</span>{" "}
                  {product.sizes.carryOnStandards}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-4 border-t-2 pt-4">
                <button className="btn-hovered w-1/2 rounded-md bg-primary py-4 uppercase text-white">
                  Add to Bag
                </button>
                <p className="text-xs">Free Delivery on orders over $50</p>
              </div>
            </section>
          </div>
        </div>

        <div className="flex flex-col py-24">
          <h2 className="font-lora-cyrillic text-4xl font-bold md:text-5xl">
            You may also like
          </h2>
          <HorizontalProductScroll />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col md:hidden">
        <div className="h-[calc(100svh-90px)] w-full overflow-hidden">
          <Image
            src={product.image}
            alt=""
            fill
            className="object-cover"
            sizes="100%"
            priority
          />
        </div>
        <div className="container py-3">
          <div className="py-4 capitalize">{`Home / ${product.categoryDetails.category} / ${product.title}`}</div>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-xl font-bold">{currencyFormat(product.price)}</p>

          <p className="mt-2">{product.description}</p>
          <h2 className="pt-2 text-lg font-bold">Product Size Guide</h2>
          <p>
            <span className="font-medium">Height:</span> {product.sizes.height}
          </p>
          <p>
            <span className="font-medium">Width:</span> {product.sizes.width}
          </p>
          <p>
            <span className="font-medium">Weight:</span> {product.sizes.weight}
          </p>
          <p>
            <span className="font-medium">Depth:</span> {product.sizes.depth}
          </p>
          <p>
            <span className="font-medium">Volume:</span> {product.sizes.volume}{" "}
          </p>
          <p>
            <span className="font-medium">Max Laptop Size:</span>{" "}
            {product.sizes.maxLaptopSize}{" "}
          </p>
          <p>
            <span className="font-medium">Carry on:</span>{" "}
            {product.sizes.carryOnStandards}
          </p>
        </div>

        <AddToCartSticky />
        <p className="text-center text-sm">Free Delivery on orders over $50</p>
        <div className="container flex flex-col py-24">
          <h2 className="font-lora-cyrillic text-4xl font-bold md:text-5xl">
            You may also like
          </h2>
          <HorizontalProductScroll />
        </div>
      </div>
    </>
  );
};

export default Item;
