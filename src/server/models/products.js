const { sequelize } = require("@/server/sequelize");
const { DataTypes } = require("sequelize");
const { PRODUCTS_TABLE } = require("../helpers/constants");

const Products = sequelize.define(
  PRODUCTS_TABLE,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sizes: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  { timestamps: true },
);

// Products.associate = (models) => {
//   Products.hasMany(models.Categories, {
//     foreignKey: "categoryId",
//     as: "categoryDetails",
//   });
// };

module.exports = Products;
