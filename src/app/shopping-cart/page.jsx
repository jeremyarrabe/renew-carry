import { currencyFormat } from '@/helpers/currencyFormat';

import { authUser } from '@/lib/auth';
import { getCurrentUserCart } from '@/lib/services/cart';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import SelectForm from './_components/SelectForm';
import { deleteItem } from './_actions';
import CartItemsComponent from './_components/CartItemsComponent';

const ShoppingCart = async () => {
  const currentCart = await getCurrentUserCart(authUser);

  return (
    <div className="flex flex-col px-4">
      <div className="text-center py-10  ">
        <h1 className="text-2xl font-medium font-lora-cyrillic">Bag</h1>
        <p className="mt-2 font-bold">{currentCart.length} Item(s)</p>
      </div>
      <CartItemsComponent cart={currentCart} />
    </div>
  );
};

export default ShoppingCart;
