import { getCurrentUserCart } from '@/lib/services/cart';
import CartDetails from './CartDetails';

import { currentUser } from '@clerk/nextjs/server';

const CartComponent = async () => {
  const user = await currentUser();
  const currentCart = await getCurrentUserCart(user.id);
  return (
    <div className="flex flex-col px-4 mt-20">
      <CartDetails currentCart={currentCart} />
    </div>
  );
};

export default CartComponent;
