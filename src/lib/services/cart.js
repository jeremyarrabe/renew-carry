import { CartItems, Categories, Products, Users } from '@/server/models';

export const getCurrentUserCart = async (id) => {
  try {
    const cart = await CartItems.findAll({
      where: {
        userId: id,
      },
      order: [['id', 'DESC']],
      include: [
        {
          model: Products,
          include: [
            {
              model: Categories,
              as: 'categoryDetails',
              attributes: { exclude: [, 'createdAt', 'updatedAt'] },
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
