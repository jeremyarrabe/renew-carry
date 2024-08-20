import { Categories, Products } from "@/server/models";

import { Suspense } from "react";
import IndividualProduct from "./_components/IndividualProduct";
import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import SelectInput from "@/components/SelectInput";
import NewArrivals from "@/components/NewArrivals";
import HorizontalProductScroll from "@/components/HorizontalProductScroll";
import { currencyFormat } from "@/helpers/currencyFormat";

// export const generateMetadata = async ({ params }) => {
//   const { productId } = params;
//   const product = await Products.findOne({
//     where: {
//       id: productId,
//     },
//     include: [
//       {
//         model: Categories,
//         as: "categoryDetails",
//         attributes: { exclude: [, "createdAt", "updatedAt"] },
//       },
//     ],
//     attributes: { exclude: "categoryId" },
//   });

//   return {
//     title: product.title,
//     description: product.body,
//   };
// };

const ItemPage = async ({ params }) => {
  const { productId } = params;
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

  console.log(product.categoryDetails.category);

  return (
    <main className="container flex flex-col">
      <div className="py-4 capitalize">{`Home / ${product.categoryDetails.category} / ${product.title}`}</div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="group relative h-[30svh] overflow-hidden rounded-md md:h-[50svh]">
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
                <span className="font-bold">Width:</span> {product.sizes.width}
              </p>
              <p>
                <span className="font-bold">Weight:</span>{" "}
                {product.sizes.weight}
              </p>
              <p>
                <span className="font-bold">Depth:</span> {product.sizes.depth}
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
            <div className="mt-4 flex gap-4 border-t-2 pt-4">
              <SelectInput className="border-2 bg-backgroundColor px-10 py-2" />
              <button className="btn-hovered w-full rounded-md bg-primary text-white">
                Add to Bag
              </button>
            </div>
          </section>
          <div className="flex items-center justify-between rounded-lg bg-gray-500 p-3 text-white">
            Free Delivery on orders over $50
            <InformationCircleIcon className="group h-6 w-6 cursor-pointer">
              <span className="hidden group-hover:block">
                Enjoy free delivery on orders over $50! No code needed.
              </span>
            </InformationCircleIcon>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-24">
        <h2 className="font-lora-cyrillic text-4xl font-bold md:text-5xl">
          You may also like
        </h2>
        <HorizontalProductScroll />
      </div>
    </main>
  );
};

export default ItemPage;
