import { sequelize } from "@/server/sequelize";
import { DataTypes } from "sequelize";
import { CATEGORIES_TABLE } from "../helpers/constants";

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

// Categories.associate = (models) => {
//   Categories.belongsToMany(models.Products, {
//     foreignKey: "categoryId",
//     as: "productsDetails",
//   });
// };

export default Categories;
