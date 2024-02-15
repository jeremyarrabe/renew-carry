const { sequelize } = require('@/server/sequelize');
const DataTypes = require('sequelize');
const { PRODUCTS_TABLE } = require('../helpers/constants');

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
    },
    category: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    sizes: {
      type: DataTypes.JSON,
    },
  },
  { timestamps: true },
);

module.exports = Products;
