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

export const getProducts = async (categoryId, orderBy) => {
  try {
    // All products sorted recently
    // await new Promise((r) => setTimeout(r, 2000));

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

    // Products by category sorted recently
    if (categoryId && orderBy === "recently") {
      const allProductsSortedByRecent = await Products.findAll({
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
      return JSON.parse(JSON.stringify(allProductsSortedByRecent));
    }

    // Products by category sorted alphabetically
    if (categoryId && orderBy === "alphabetically") {
      const allProductsSortedByRecent = await Products.findAll({
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
      return JSON.parse(JSON.stringify(allProductsSortedByRecent));
    }

    // if (categoryId && orderBy === "recently") {
    //   const categorySortedByRecent = await Products.findAll({
    //     include: [
    //       {
    //         model: Categories,
    //         as: "categoryDetails",
    //         attributes: { exclude: [, "createdAt", "updatedAt"] },
    //         where: { id: categoryId },
    //       },
    //     ],
    //     order: [["updatedAt", "DESC"]],
    //   });
    //   return JSON.parse(JSON.stringify(categorySortedByRecent));
    // }

    // if (categoryId && orderBy === "alphabetically") {
    //   const categorySortedAlphabetically = await Products.findAll({
    //     include: [
    //       {
    //         model: Categories,
    //         as: "categoryDetails",
    //         attributes: { exclude: [, "createdAt", "updatedAt"] },
    //         where: { id: categoryId },
    //       },
    //     ],
    //     order: [["title", "DESC"]],
    //   });
    //   return JSON.parse(JSON.stringify(categorySortedAlphabetically));
    // }

    // if (!categoryId && orderBy === "recently") {
    //   console.log(orderBy);
    //   const allProductsSortedByRecent = await Products.findAll({
    //     include: [
    //       {
    //         model: Categories,
    //         as: "categoryDetails",
    //         attributes: { exclude: [, "createdAt", "updatedAt"] },
    //       },
    //     ],
    //     order: [["updatedAt", "DESC"]],
    //   });
    //   return JSON.parse(JSON.stringify(allProductsSortedByRecent));
    // }

    // if (!categoryId && orderBy === "alphabetically") {
    //   const allProductsSortedAlphabetically = await Products.findAll({
    //     include: [
    //       {
    //         model: Categories,
    //         as: "categoryDetails",
    //         attributes: { exclude: [, "createdAt", "updatedAt"] },
    //       },
    //     ],
    //     order: [["title", "ASC"]],
    //   });
    //   return JSON.parse(JSON.stringify(allProductsSortedAlphabetically));
    // }

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
