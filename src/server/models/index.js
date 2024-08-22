import Users from "./users";
import CartItems from "./cartItems";
import Categories from "./categories";
import Products from "./products";

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

// A product has one category

export { Users, CartItems, Categories, Products };
