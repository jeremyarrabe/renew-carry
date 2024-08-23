"use server";
import { CartItems, Categories, Products, Users } from "@/server/models";
import { revalidatePath } from "next/cache";

export const getCurrentUserCart = async (id) => {
  try {
    const cart = await CartItems.findAll({
      where: {
        userId: id,
      },
      order: [["id", "DESC"]],
      include: [
        {
          model: Products,
          include: [
            {
              model: Categories,
              as: "categoryDetails",
              attributes: { exclude: [, "createdAt", "updatedAt"] },
            },
          ],
        },
      ],
    });
    return JSON.parse(JSON.stringify(cart));
  } catch (error) {
    console.log(error);
  }
};

export const addItemToCart = async (userId, productId) => {
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
    revalidatePath("/shopping-cart");
  } catch (error) {
    console.log(error);
  }
};
