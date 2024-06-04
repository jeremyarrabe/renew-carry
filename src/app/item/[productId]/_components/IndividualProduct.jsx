import HorizontalProductScroll from '@/components/HorizontalProductScroll';
import { currencyFormat } from '@/helpers/currencyFormat';
import { Categories, Products } from '@/server/models';
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { addItem } from '../_actions';
import AddToCartButton from './AddToCartButton';
import FullProductDetail from './FullProductDetail';

const IndividualProduct = async ({ productId }) => {
  const user = await currentUser();
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
  const addItemWithId = addItem.bind(null, user?.id, product.id);

  return (
    <div className="flex flex-col mt-[90px]">
      {/* Hide on lg below */}
      <div className="lg:hidden px-4 md:px-20 lg:px-32 ">
        <div className="flex flex-col mt-10">
          <h1 className="text-3xl font-medium font-lora-cyrillic">{product.title}</h1>
          <Link
            className="text-lg font-medium capitalize"
            href={`/products/${product.categoryDetails.category}`}
          >
            {product.categoryDetails.category}
          </Link>
          <h3 className="text-lg font-bold mt-4">{currencyFormat(product.price)}</h3>
        </div>
        <div className=" relative w-full min-h-[300px] mt-4">
          <Image
            src={product.image}
            alt="item image"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="flex justify-between mt-5 gap-2">
          {user ? (
            <form action={addItemWithId} className="flex grow">
              <AddToCartButton />
            </form>
          ) : (
            <Link
              href={'/sign-in'}
              className="text-lg bg-darkGreen rounded-lg text-white font-bold grow  py-3 px-5 text-center "
            >
              Add to cart
            </Link>
          )}
        </div>
      </div>

      {/* Show on larger screens */}
      <FullProductDetail
        image={product.image}
        title={product.title}
        category={product.categoryDetails.category}
        price={product.price}
        userId={user?.id}
        addItemWithId={addItemWithId}
        productId={product.id}
      />
      <div className=" px-4 md:px-20 lg:px-32 lg:text-lg">
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
        <div className="mt-16 pb-20 ">
          <h2 className="text-3xl font-medium text-center">You may also like</h2>
          <HorizontalProductScroll />
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
