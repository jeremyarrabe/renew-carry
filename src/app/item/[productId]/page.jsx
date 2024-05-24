import HorizontalProductScroll from '@/components/HorizontalProductScroll';
import { currencyFormat } from '@/helpers/currencyFormat';
import { addItem } from './_actions';
import { Categories, Products } from '@/server/models';
import { HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { authUser } from '@/lib/auth';
import Button from '@/components/ui/Button';
import IndividualProduct from './_components/IndividualProduct';
import { Suspense } from 'react';

export const generateMetadata = async ({ params }) => {
  const { productId } = params;
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
    <div className="flex flex-col px-4 mt-[100px]">
      <div className="flex flex-col mt-10 gap-2">
        <div className="h-10 w-40 bg-gray-300 animate-pulse"></div>
        <div className="h-7 w-28 bg-gray-300 animate-pulse"></div>
        <div className="h-6 w-20 bg-gray-300 animate-pulse"></div>
      </div>
      <div className=" relative w-full min-h-[300px] mt-4 bg-gray-300 animate-pulse"></div>

      <div className="flex justify-between mt-5 gap-2">
        <div className="h-10  bg-gray-300 animate-pulse grow"></div>

        <div className="h-10 w-24 bg-gray-300 animate-pulse "></div>
      </div>

      <div className="h-[100px] w-full bg-gray-300 animate-pulse mt-5  mb-9"></div>
    </div>
  );
};

export default ProductId;
