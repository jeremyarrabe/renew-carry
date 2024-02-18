import { sequelize } from '@/server/sequelize';
import { DataTypes } from 'sequelize';
import { CATEGORIES_TABLE } from '../helpers/constants';

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

export default Categories;
