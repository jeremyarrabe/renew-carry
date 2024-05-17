import { authUser } from '@/lib/auth';
import { getCurrentUserCart } from '@/lib/services/cart';
import CartDetails from './CartDetails';

import { currentUser } from '@clerk/nextjs/server';

const CartComponent = async () => {
  const currentCart = await getCurrentUserCart(authUser);
  const user = await currentUser();
  console.log(user);
  return (
    <div className="flex flex-col px-4 mt-20">
      <CartDetails currentCart={currentCart} />
    </div>
  );
};

export default CartComponent;
