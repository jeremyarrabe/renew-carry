import { currentUser } from "@clerk/nextjs/server";
import CartComponent from "./_components/CartComponent";
import CartDetails from "./_components/CartDetails";
import { getCurrentUserCart } from "@/lib/services/cart";

const ShoppingCartPage = async () => {
  const user = await currentUser();
  const currentCart = await getCurrentUserCart(user.id);
  return (
    <div className="container flex flex-col px-4">
      <CartDetails currentCart={currentCart} />
    </div>
  );
};

export default ShoppingCartPage;
