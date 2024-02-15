const Users = require('./users');
const CartItems = require('./cartItems');
const Products = require('./products');

Users.hasMany(CartItems, { as: 'userCartItems' });
CartItems.belongsTo(Users);

Users.belongsToMany(Products, { through: CartItems, as: 'products' });
Products.belongsToMany(Users, { through: CartItems, as: 'users' });

CartItems.belongsTo(Products);

module.exports = {
  Users,
  CartItems,
  Products,
};
