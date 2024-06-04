'use client';
import Link from 'next/link';
import AddToCartButton from './AddToCartButton';
import { addItem } from '../_actions';
import { motion } from 'framer-motion';

const AddToCartModal = ({ userId, productId, title, category, addItemWithId }) => {
  const modalVariants = {
    default: { y: '200%' },
    show: {
      y: '0%',
    },
    hidden: { y: '200%' },
  };

  return (
    <motion.div
      variants={modalVariants}
      initial="default"
      animate="show"
      exit="hidden"
      className=" self-center fixed bottom-10 w-[70%] h-[80px] bg-white flex  py-2 px-4 justify-between rounded-lg shadow-xl  z-50"
    >
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
    </motion.div>
  );
};

export default AddToCartModal;
