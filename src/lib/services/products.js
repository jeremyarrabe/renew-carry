'use server';

import { Categories, Products } from '@/server/models';

export const getNewArrivals = async () => {
  try {
    const products = await Products.findAll({
      limit: 5,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Categories,
          as: 'categoryDetails',
          attributes: { exclude: [, 'createdAt', 'updatedAt'] },
        },
      ],
      attributes: { exclude: 'categoryId' },
    });
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (filterId) => {
  try {
    if (filterId) {
      const filteredProducts = await Products.findAll({
        include: [
          {
            model: Categories,
            as: 'categoryDetails',
            attributes: { exclude: [, 'createdAt', 'updatedAt'] },
          },
        ],

        where: {
          categoryId: filterId,
        },
      });
      return filteredProducts;
    }
    const productList = await Products.findAll({
      include: [
        {
          model: Categories,
          as: 'categoryDetails',
          attributes: { exclude: [, 'createdAt', 'updatedAt'] },
        },
      ],
    });
    return productList;
  } catch (error) {
    console.log(error);
  }
};
