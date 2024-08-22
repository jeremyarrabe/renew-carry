const { sequelize } = require("@/server/sequelize");
const { DataTypes } = require("sequelize");
const { USERS_TABLE } = require("../helpers/constants");

const Users = sequelize.define(
  USERS_TABLE,
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      // autoIncrement: true, // This option is not applicable for STRING type
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { timestamps: true },
);

module.exports = Users;
