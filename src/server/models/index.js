const Users = require('./users');
const CartItems = require('./cartItems');
const Products = require('./products');
const Categories = require('./categories');

Users.hasMany(CartItems, { as: 'userCartItems' });
CartItems.belongsTo(Users);

Users.belongsToMany(Products, { through: CartItems, as: 'products' });
Products.belongsToMany(Users, { through: CartItems, as: 'users' });

CartItems.belongsTo(Products);

Products.belongsTo(Categories, { foreignKey: 'categoryId', as: 'categoryDetails' });
Categories.hasMany(Products, { foreignKey: 'categoryId', as: 'productsDetails' });

module.exports = {
  Users,
  CartItems,
  Products,
  Categories,
};
