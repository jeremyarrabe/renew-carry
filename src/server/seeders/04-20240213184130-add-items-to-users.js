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
          userId: 123,
          productId: 1,
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(CARTITEMS_TABLE, null, {});
  },
};
