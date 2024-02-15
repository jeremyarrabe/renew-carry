'use strict';

const { CARTITEMS_TABLE } = require('../helpers/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      CARTITEMS_TABLE,
      [
        {
          quantity: 1,
          userId: 1,
          productId: 1,
          createdAt: new Date().toLocaleDateString(),
          updatedAt: new Date().toLocaleDateString(),
        },
        {
          quantity: 1,
          userId: 1,
          productId: 2,
          createdAt: new Date().toLocaleDateString(),
          updatedAt: new Date().toLocaleDateString(),
        },
        {
          quantity: 1,
          userId: 1,
          productId: 3,
          createdAt: new Date().toLocaleDateString(),
          updatedAt: new Date().toLocaleDateString(),
        },
        {
          quantity: 1,
          userId: 2,
          productId: 4,
          createdAt: new Date().toLocaleDateString(),
          updatedAt: new Date().toLocaleDateString(),
        },
        {
          quantity: 1,
          userId: 2,
          productId: 5,
          createdAt: new Date().toLocaleDateString(),
          updatedAt: new Date().toLocaleDateString(),
        },
        {
          quantity: 1,
          userId: 2,
          productId: 6,
          createdAt: new Date().toLocaleDateString(),
          updatedAt: new Date().toLocaleDateString(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(CARTITEMS_TABLE, null, {});
  },
};
