import { sequelize } from '@/server/sequelize';
import { DataTypes } from 'sequelize';
import { CARTITEMS_TABLE } from '../helpers/constants';

const CartItems = sequelize.define(
  CARTITEMS_TABLE,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

export default CartItems;
