'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable('CartItems', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        quantity: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        userId: {
          type: Sequelize.INTEGER,
        },
        productId: {
          type: Sequelize.INTEGER,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      })
      .then(() =>
        queryInterface.addConstraint('CartItems', {
          type: 'FOREIGN KEY',
          fields: ['userId'],
          references: {
            table: 'Users',
            field: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE ',
        }),
      )
      .then(() =>
        queryInterface.addConstraint('CartItems', {
          type: 'FOREIGN KEY',
          fields: ['productId'],
          references: {
            table: 'Products',
            field: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE ',
        }),
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CartItems');
  },
};
