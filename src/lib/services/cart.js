import { CartItems, Categories, Products, Users } from '@/server/models';

export const getCurrentUserCart = async (id) => {
  const cart = CartItems.findAll({
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
  return cart;
};
