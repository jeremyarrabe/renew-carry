'use strict';

const { USERS_TABLE } = require('../helpers/constants');

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
      USERS_TABLE,
      [
        {
          firstName: 'Jeremy',
          lastName: 'Arrabe',
          email: 'jeremy@gmail.com',
          username: 'jeremyarrabe',
          password: 'hashedpassword1',
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },
        {
          firstName: 'Shirley',
          lastName: 'Anciro',
          email: 'shirley@gmail.com',
          username: 'shirleyanciro',
          password: 'hashedpassword2',
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
    await queryInterface.bulkDelete(USERS_TABLE, null, {});
  },
};
