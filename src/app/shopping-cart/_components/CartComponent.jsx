import { currencyFormat } from '@/helpers/currencyFormat';
import CartItems from './CartItems';
import { getCurrentUserCart } from '@/lib/services/cart';
import { authUser } from '@/lib/auth';

const CartComponent = async () => {
  const currentCart = await getCurrentUserCart(authUser);
  // const totalPrice = optimisticCart.reduce(
  //   (acc, currentItem) => acc + currentItem.product.price * currentItem.quantity,
  //   0,
  // );

  return (
    <div className="flex flex-col px-4">
      <div className="text-center py-10  ">
        <h1 className="text-2xl font-medium font-lora-cyrillic">Bag</h1>
        <p className="mt-2 font-bold">{currentCart.length} Item(s)</p>
      </div>

      <div className="flex flex-col border">
        <CartItems cart={currentCart} />
      </div>
      {/* <div className="flex flex-col mt-4 font-medium gap-1 pb-6">
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
        <button className="bg-transparent py-4 mt-4 text-black border py-4 border-darkGreen rounded-lg">
          Go to Checkout
        </button>
      </div> */}
    </div>
  );
};

export default CartComponent;
