'use server';
import { CartItems } from '@/server/models';
import { revalidatePath } from 'next/cache';

export const addItem = async (userId, productId) => {
  try {
    const item = await CartItems.findOne({ where: { productId, userId } });

    if (!item) {
      await CartItems.create({
        quantity: 1,
        userId,
        productId,
      });
    } else {
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

    console.log('Item added');
    revalidatePath('/shopping-cart');
  } catch (error) {
    console.log(error);
  }
};
