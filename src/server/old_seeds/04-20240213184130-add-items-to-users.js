'use strict';

const { CARTITEMS_TABLE } = require('../helpers/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      CARTITEMS_TABLE,
      [
        {
          quantity: 1,
          userId: 1,
          productId: 1,
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },
        {
          quantity: 1,
          userId: 1,
          productId: 2,
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },
        {
          quantity: 1,
          userId: 1,
          productId: 3,
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },
        {
          quantity: 1,
          userId: 2,
          productId: 4,
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },
        {
          quantity: 1,
          userId: 2,
          productId: 5,
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },
        {
          quantity: 1,
          userId: 2,
          productId: 6,
          updatedAt: new Date().toLocaleString(),
          createdAt: new Date().toLocaleString(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(CARTITEMS_TABLE, null, {});
  },
};
