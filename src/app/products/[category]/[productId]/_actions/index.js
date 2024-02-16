'use server';
import { CartItems } from '@/server/models';
import { revalidatePath } from 'next/cache';

export const addItem = async (userId, productId) => {
  console.log(userId, productId);
  try {
    const item = await CartItems.findOne({ where: { productId, userId } });

    if (!item) {
      await CartItems.create({
        quantity: 1,
        userId,
        productId,
      });
    }

    if (item && item.quantity < 9) {
      await CartItems.update(
        { quantity: item.quantity + 1 },
        {
          where: {
            userId,
            productId,
          },
        },
      );
    }

    revalidatePath('/products');
  } catch (error) {
    console.log(error);
  }
};
