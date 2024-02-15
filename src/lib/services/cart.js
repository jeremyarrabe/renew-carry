'use server';

import { CartItems, Products, Users } from '@/server/models';

export const getCurrentUserCart = async (id) => {
  const cart = CartItems.findAll({
    where: {
      userId: id,
    },
    order: [['updatedAt', 'DESC']],
    include: [{ model: Products }],
  });
  return cart;
};

// export const aa = async (id) => {
//   const cart = await CartItems.getProducts();
//   console.log(cart);
// };
// aa();
