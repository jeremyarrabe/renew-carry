const Users = require('./users');
const CartItems = require('./cartItems');
const Products = require('./products');

CartItems.hasMany(Users, { foreignKey: 'id' });
CartItems.hasMany(Products, { foreignKey: 'id' });

module.exports = {
  Users,
  CartItems,
  Products,
};
