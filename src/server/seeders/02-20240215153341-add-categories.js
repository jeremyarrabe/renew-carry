'use strict';

const { CATEGORIES_TABLE } = require('../helpers/constants');

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
      CATEGORIES_TABLE,
      [
        {
          category: 'backpack',
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },
        {
          category: 'handbag',
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },

        {
          category: 'shoulder bag',
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },

        {
          category: 'tote bag',
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },

        {
          category: 'sling bag',
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },

        {
          category: 'laptop bag',
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },

        {
          category: 'hiking bag',
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
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
    await queryInterface.bulkDelete(CATEGORIES_TABLE, null, {});
  },
};
