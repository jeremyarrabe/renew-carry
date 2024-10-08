const Users = require("./users");
const CartItems = require("./cartItems");
const Categories = require("./categories");
const Products = require("./products");

Users.hasMany(CartItems, { as: "userCartItems" });
CartItems.belongsTo(Users);

Users.belongsToMany(Products, { through: CartItems, as: "products" });
Products.belongsToMany(Users, { through: CartItems, as: "users" });

CartItems.belongsTo(Products);

Categories.hasMany(Products, {
  foreignKey: "categoryId",
  as: "productsDetails",
});
Products.belongsTo(Categories, {
  foreignKey: "categoryId",
  as: "categoryDetails",
});

module.exports = { Users, CartItems, Categories, Products };
