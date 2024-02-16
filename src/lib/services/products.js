import { Categories, Products } from '@/server/models';
import { unstable_noStore } from 'next/cache';

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

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async (filterId) => {
  try {
    if (filterId) {
      const filteredProducts = await Products.findAll({
        include: [
          {
            model: Categories,
            as: 'categoryDetails',
            attributes: { exclude: [, 'createdAt', 'updatedAt'] },
            where: { id: filterId },
          },
        ],
      });
      return filteredProducts;
    } else {
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
    }
  } catch (error) {
    console.log(error);
  }
};
