import HorizontalProductScroll from "@/components/HorizontalProductScroll";
import { currencyFormat } from "@/helpers/currencyFormat";
import { addItem } from "./_actions";
import { Categories, Products } from "@/server/models";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { authUser } from "@/lib/auth";

import IndividualProduct from "./_components/IndividualProduct";
import { Suspense } from "react";

export const generateMetadata = async ({ params }) => {
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

  return {
    title: product.title,
    description: product.body,
  };
};

const ProductId = async ({ params }) => {
  const { productId } = params;

  return (
    <Suspense fallback={<ProductLoading />}>
      <IndividualProduct productId={productId} />
    </Suspense>
  );
};

const ProductLoading = () => {
  return (
    <div className="mt-[100px] flex flex-col bg-red-600 px-4 md:px-20 lg:px-32">
      <div className="mt-10 flex flex-col gap-2">
        <div className="h-10 w-40 animate-pulse bg-gray-300"></div>
        <div className="h-7 w-28 animate-pulse bg-gray-300"></div>
        <div className="h-6 w-20 animate-pulse bg-gray-300"></div>
      </div>
      <div className="relative mt-4 min-h-[300px] w-full animate-pulse bg-gray-300"></div>

      <div className="mt-5 flex justify-between gap-2">
        <div className="h-10 grow animate-pulse bg-gray-300"></div>

        <div className="h-10 w-24 animate-pulse bg-gray-300"></div>
      </div>

      <div className="mb-9 mt-5 h-[100px] w-full animate-pulse bg-gray-300"></div>
    </div>
  );
};

export default ProductId;
