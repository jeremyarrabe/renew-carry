'use strict';

const { USERS_TABLE, CARTITEMS_TABLE, PRODUCTS_TABLE } = require('../helpers/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(CARTITEMS_TABLE, 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: USERS_TABLE,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    await queryInterface.addColumn(CARTITEMS_TABLE, 'productId', {
      type: Sequelize.INTEGER,
      references: {
        model: PRODUCTS_TABLE,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(CARTITEMS_TABLE, 'userId');
    await queryInterface.removeColumn(CARTITEMS_TABLE, 'productId');
  },
};
