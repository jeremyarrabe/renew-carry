const { sequelize } = require('@/server/sequelize');
const DataTypes = require('sequelize');
const { CARTITEMS_TABLE } = require('../helpers/constants');

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
      defaultValue: 1,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id',
      },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = CartItems;
