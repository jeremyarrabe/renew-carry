import { Categories, Products } from "@/server/models";

export const getNewArrivals = async () => {
  try {
    const products = await Products.findAll({
      limit: 15,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Categories,
          as: "categoryDetails",
        },
      ],
      attributes: { exclude: "categoryId" },
    });

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async (categoryId) => {
  try {
    if (categoryId) {
      const productByCategoryList = await Products.findAll({
        include: [
          {
            model: Categories,
            as: "categoryDetails",
            attributes: { exclude: [, "createdAt", "updatedAt"] },
            where: { id: categoryId },
          },
        ],
        order: [["updatedAt", "DESC"]],
      });
      return JSON.parse(JSON.stringify(productByCategoryList));
    }

    const productList = await Products.findAll({
      include: [
        {
          model: Categories,
          as: "categoryDetails",
          attributes: { exclude: [, "createdAt", "updatedAt"] },
        },
      ],
      order: [["updatedAt", "DESC"]],
    });

    return JSON.parse(JSON.stringify(productList));
  } catch (error) {
    console.log(error);
  }
};

export const getProductsAlphabetically = async (categoryId) => {
  try {
    if (categoryId) {
      const productByCategoryList = await Products.findAll({
        include: [
          {
            model: Categories,
            as: "categoryDetails",
            attributes: { exclude: [, "createdAt", "updatedAt"] },
            where: { id: categoryId },
          },
        ],
        order: [["title", "ASC"]],
      });
      return JSON.parse(JSON.stringify(productByCategoryList));
    }

    const productList = await Products.findAll({
      include: [
        {
          model: Categories,
          as: "categoryDetails",
          attributes: { exclude: [, "createdAt", "updatedAt"] },
        },
      ],
      order: [["title", "ASC"]],
    });

    return JSON.parse(JSON.stringify(productList));
  } catch (error) {
    console.log(error);
  }
};
