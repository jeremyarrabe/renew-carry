import { currencyFormat } from '@/helpers/currencyFormat';

import { authUser } from '@/lib/auth';
import { getCurrentUserCart } from '@/lib/services/cart';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import SelectForm from './_components/SelectForm';
import { deleteItem } from './_actions';

const ShoppingCart = async () => {
  const cart = await getCurrentUserCart(authUser);
  let totalPrice = 0;

  return (
    <div className="flex flex-col px-4">
      <div className="text-center py-10  ">
        <h1 className="text-2xl font-medium font-lora-cyrillic">Bag</h1>
        <p className="mt-2 font-bold">{cart.length} Item(s)</p>
      </div>
      <div className="flex flex-col border">
        {cart && cart.length > 0 ? (
          cart.map((item) => {
            totalPrice += item.product.price * item.quantity;
            return (
              <div className="flex py-4 gap-5" key={item.product.id}>
                <div className="relative w-1/3 h-20">
                  <Image
                    src={item.product.image}
                    alt=""
                    fill
                    className="object-cover "
                    sizes="100%"
                  />
                </div>

                <div className="flex flex-col text-lg">
                  <p className="font-medium font-lora-cyrillic">
                    {currencyFormat(item.product.price * item.quantity)}
                  </p>
                  <p className="font-medium font-lora-cyrillic">{item.product.title}</p>
                  <p>{item.product.category}</p>
                  <SelectForm
                    userId={item.userId}
                    productId={item.productId}
                    defaultValue={item.quantity}
                  />
                  <div className="flex mt-4 gap-6">
                    <button>
                      <HeartIcon className="h-6 w-6" />
                    </button>
                    <form action={deleteItem}>
                      <input type="hidden" name="userId" value={item.userId} />
                      <input type="hidden" name="productId" value={item.productId} />
                      <button type="submit">
                        <TrashIcon className="h-6 w-6 " />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col justify-center py-10">
            <p className="text-center">
              Cart Empty...
              <Link href={'/products'} className="underline text-blue-500">
                Shop Here
              </Link>
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col mt-4 font-medium gap-1 pb-6">
        <h3 className="text-2xl font-medium font-lora-cyrillic">Summary</h3>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p> {currencyFormat(totalPrice)}</p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Delivery & Handling Fee</p>
          <p>{totalPrice !== 0 ? currencyFormat(10) : currencyFormat(0)}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Total</p>
          <p>{totalPrice !== 0 ? currencyFormat(totalPrice + 10) : currencyFormat(0)}</p>
        </div>
        <button className="bg-transparentpy-4 mt-4 text-black border py-4 border-darkGreen rounded-lg">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
