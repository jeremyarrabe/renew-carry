'use server';
import { CartItems } from '@/server/models';
import { revalidatePath } from 'next/cache';

export const addItem = async (userId, productId) => {
  try {
    const item = await CartItems.findOne({ where: { productId, userId } });

    if (!item) {
      console.log(1);
      await CartItems.create({
        quantity: 1,
        userId,
        productId,
      });
    }

    if (item && item < 9) {
      CartItems.update(
        { quantity: item.quantity + 1 },
        {
          where: {
            userId,
            productId,
          },
        },
      );
    }

    revalidatePath('/shopping-cart');
  } catch (error) {
    console.log(error);
  }
};
