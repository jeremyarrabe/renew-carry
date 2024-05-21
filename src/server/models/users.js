import { sequelize } from '@/server/sequelize';
import { DataTypes } from 'sequelize';
import { USERS_TABLE } from '../helpers/constants';

const Users = sequelize.define(
  USERS_TABLE,
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: true },
);

export default Users;
