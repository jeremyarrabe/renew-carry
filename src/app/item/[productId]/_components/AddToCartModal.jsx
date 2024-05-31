'use client';
import Link from 'next/link';
import AddToCartButton from './AddToCartButton';
import { addItem } from '../_actions';

const AddToCartModal = ({ userId, productId, title, category }) => {
  const addItemWithId = addItem.bind(null, userId, productId);

  return (
    <div className=" self-center fixed bottom-10 w-[70%] h-[80px] bg-white flex  py-2 px-4 justify-between rounded-lg shadow-xl ">
      <div className="flex flex-col  justify-center ">
        <p className="font-lora-cyrillic font-bold text-lg">{title}</p>
        <p className="capitalize">{category}</p>
      </div>
      <div className="flex items-center justify-center w-1/3">
        {userId ? (
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
  );
};

export default AddToCartModal;
