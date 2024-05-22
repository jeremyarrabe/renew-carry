import { sequelize } from '@/server/sequelize';
import { DataTypes } from 'sequelize';
import { USERS_TABLE } from '../helpers/constants';

const Users = sequelize.define(
  USERS_TABLE,
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      // autoIncrement: true,
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

export default Users;
