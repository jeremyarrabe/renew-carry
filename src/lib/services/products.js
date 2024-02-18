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
        },
      ],
      attributes: { exclude: 'categoryId' },
    });

    return JSON.parse(JSON.stringify(products));
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
      return JSON.parse(JSON.stringify(filteredProducts));
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

      return JSON.parse(JSON.stringify(productList));
    }
  } catch (error) {
    console.log(error);
  }
};
