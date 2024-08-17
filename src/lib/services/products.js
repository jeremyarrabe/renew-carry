import { Categories, Products } from "@/server/models";

// export const getProductForEachCategory = ({categoryId}) => {
//   try {

//   } catch (error) {
//     console.log(error);
//   }

// }

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

export const getProducts = async (categoryId, orderBy) => {
  // await new Promise((r) => setTimeout(r, 2000));
  try {
    // All products sorted recently
    if (!categoryId && orderBy === "recently") {
      const allProductsSortedByRecent = await Products.findAll({
        include: [
          {
            model: Categories,
            as: "categoryDetails",
            attributes: { exclude: [, "createdAt", "updatedAt"] },
          },
        ],
        order: [["updatedAt", "DESC"]],
      });
      return JSON.parse(JSON.stringify(allProductsSortedByRecent));
    }

    // All products sorted alphabetically
    if (!categoryId && orderBy === "alphabetically") {
      const allProductsSortedAlphabetically = await Products.findAll({
        include: [
          {
            model: Categories,
            as: "categoryDetails",
            attributes: { exclude: [, "createdAt", "updatedAt"] },
          },
        ],
        order: [["title", "ASC"]],
      });

      return JSON.parse(JSON.stringify(allProductsSortedAlphabetically));
    }

    if (categoryId && orderBy === "recently") {
      const productsByCategorySortedByRecent = await Products.findAll({
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

      return JSON.parse(JSON.stringify(productsByCategorySortedByRecent));
    }

    // Products by category sorted alphabetically
    if (categoryId && orderBy === "alphabetically") {
      const productsByCategorySortedAlphabetically = await Products.findAll({
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
      return JSON.parse(JSON.stringify(productsByCategorySortedAlphabetically));
    }
  } catch (error) {
    console.log(error);
  }
};
