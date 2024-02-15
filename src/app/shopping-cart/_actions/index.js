'use server';

import { CartItems } from '@/server/models';
import { revalidatePath } from 'next/cache';

export const deleteItem = async (formData) => {
  try {
    const rawFormData = {
      productId: formData.get('productId'),
      userId: formData.get('userId'),
    };
    await CartItems.destroy({
      where: {
        userId: parseInt(rawFormData.userId),
        productId: parseInt(rawFormData.productId),
      },
    });

    revalidatePath('/shopping-cart');
  } catch (error) {
    console.log(error);
  }
};

export const updateQuantity = async (formData) => {
  try {
    const rawFormData = {
      productId: formData.get('productId'),
      userId: formData.get('userId'),
      quantity: formData.get('quantity'),
    };
    await CartItems.update(
      { quantity: parseInt(rawFormData.quantity) },
      {
        where: {
          userId: parseInt(rawFormData.userId),
          productId: parseInt(rawFormData.productId),
        },
      },
    );

    revalidatePath('/shopping-cart');
  } catch (error) {
    console.log(error);
  }
};
