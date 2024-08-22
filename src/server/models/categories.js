const { sequelize } = require("@/server/sequelize");
const { DataTypes } = require("sequelize");
const { CATEGORIES_TABLE } = require("../helpers/constants");

const Categories = sequelize.define(
  CATEGORIES_TABLE,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true },
);

module.exports = Categories;
