import { authUser } from '@/lib/auth';
import { getCurrentUserCart } from '@/lib/services/cart';
import CartDetails from './CartDetails';

const CartComponent = async () => {
  const currentCart = await getCurrentUserCart(authUser);

  return (
    <div className="flex flex-col px-4">
      <CartDetails currentCart={currentCart} />
    </div>
  );
};

export default CartComponent;
