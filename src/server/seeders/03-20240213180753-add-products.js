'use strict';

const { PRODUCTS_TABLE } = require('../helpers/constants');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const productList = [
      {
        title: 'TrailBlaze',
        price: 39.99,
        categoryId: 1,
        image:
          'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'The TrailBlaze is perfect for urban explorers and globetrotters alike. Made from durable materials, this backpack offers ample storage space for all your essentials while keeping you looking chic on the go.',
        sizes: {
          height: '20" | 50.8cm',
          width: '12" | 30.48cm',
          depth: '8" | 20.32cm',
          weight: '2.8 lbs | 1.27 kg empty',
          volume: '30 L',
          maxLaptopSize: 'Fits most 15" laptops',
          carryOnStandards: 'Meets carry-on standards for most airlines',
        },
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        title: 'Satchel',
        price: 19.99,
        categoryId: 2,
        image:
          'https://images.unsplash.com/photo-1566150902887-9679ecc155ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'The Classic Satchel combines timeless design with modern functionality. With its adjustable strap and multiple compartments, this bag is perfect for commuting, travel, or everyday use.',
        sizes: {
          height: '14" | 35.56cm',
          width: '16" | 40.64cm',
          depth: '6" | 15.24cm',
          weight: '2.2 lbs | 1 kg empty',
          volume: '25 L',
          maxLaptopSize: 'Fits most 13" laptops',
          carryOnStandards: 'Meets carry-on standards for most airlines',
        },
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        title: 'Nomad',
        price: 49.99,
        categoryId: 1,
        image:
          'https://plus.unsplash.com/premium_photo-1664110691115-790e20a41744?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'The Nomad Backpack is built for the rugged outdoors. Featuring durable materials and ample storage, this backpack is ready to accompany you on your next hiking or camping trip.',
        sizes: {
          height: '22" | 55.88cm',
          width: '14" | 35.56cm',
          depth: '10" | 25.4cm',
          weight: '3.5 lbs | 1.59 kg empty',
          volume: '40 L',
          maxLaptopSize: 'Does not have a laptop compartment',
          carryOnStandards: 'Not suitable for carry-on',
        },
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        title: 'Chicc',
        price: 15.99,
        categoryId: 2,
        image:
          'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          "The Chicc is the epitome of style and versatility. Whether you're running errands or exploring the city, this bag keeps your essentials organized and easily accessible.",
        sizes: {
          height: '10" | 25.4cm',
          width: '8" | 20.32cm',
          depth: '4" | 10.16cm',
          weight: '1.5 lbs | 0.68 kg empty',
          volume: '10 L',
          maxLaptopSize: 'Does not have a laptop compartment',
          carryOnStandards: 'Meets carry-on standards for most airlines',
        },
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        title: 'Metro',
        price: 17.99,
        categoryId: 4,
        image:
          'https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'The Metro is the perfect blend of style and functionality for your weekend adventures. Made from durable materials, this tote bag is designed to withstand the rigors of travel while keeping your belongings secure.',
        sizes: {
          height: '18" | 45.72cm',
          width: '22" | 55.88cm',
          depth: '10" | 25.4cm',
          weight: '2.5 lbs | 1.13 kg empty',
          volume: '35 L',
          maxLaptopSize: 'Does not have a laptop compartment',
          carryOnStandards: 'Meets carry-on standards for most airlines',
        },
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        title: 'Aura ',
        price: 19.99,
        categoryId: 5,
        image:
          'https://images.unsplash.com/photo-1575032617751-6ddec2089882?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'The Aura is designed for those who prefer a minimalist approach to carrying their essentials. With its sleek design and lightweight construction, this bag is perfect for daily commutes or travel.',
        sizes: {
          height: '12" | 30.48cm',
          width: '8" | 20.32cm',
          depth: '4" | 10.16cm',
          weight: '1.2 lbs | 0.54 kg empty',
          volume: '8 L',
          maxLaptopSize: 'Does not have a laptop compartment',
          carryOnStandards: 'Meets carry-on standards for most airlines',
        },
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        title: 'Nova',
        price: 59.99,
        categoryId: 7,
        image:
          'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'The Nova is designed for the modern professional who values style and functionality. With its sleek design and organizational features, this bag keeps your laptop and other essentials secure while on the go.',
        sizes: {
          height: '12" | 30.48cm',
          width: '16" | 40.64cm',
          depth: '3" | 7.62cm',
          weight: '2.8 lbs | 1.27 kg empty',
          volume: '15 L',
          maxLaptopSize: 'Fits most 15" laptops',
          carryOnStandards: 'Meets carry-on standards for most airlines',
        },
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        title: 'Classic',
        price: 49.99,
        categoryId: 3,
        image:
          'https://images.unsplash.com/photo-1620786514684-ff35b5aae55e?q=80&w=971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'The Classic is the perfect companion for your short getaways or gym sessions. With its spacious interior and durable construction, this duffel bag offers both style and functionality.',
        sizes: {
          height: '12" | 30.48cm',
          width: '20" | 50.8cm',
          depth: '10" | 25.4cm',
          weight: '2.5 lbs | 1.13 kg empty',
          volume: '30 L',
          maxLaptopSize: 'Does not have a laptop compartment',
          carryOnStandards: 'Meets carry-on standards for most airlines',
        },
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        title: 'Pinnacle',
        price: 69.99,
        categoryId: 7,
        image:
          'https://images.unsplash.com/photo-1622260614927-208cfe3f5cfd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'The Pinnacle is built for the rugged outdoors. Featuring durable materials and ample storage, this backpack is ready to accompany you on your next hiking or camping trip.',
        sizes: {
          height: '22" | 55.88cm',
          width: '14" | 35.56cm',
          depth: '10" | 25.4cm',
          weight: '3.5 lbs | 1.59 kg empty',
          volume: '40 L',
          maxLaptopSize: 'Does not have a laptop compartment',
          carryOnStandards: 'Not suitable for carry-on',
        },
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
    ];
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
      PRODUCTS_TABLE,
      productList,
      {},
      { sizes: { type: new Sequelize.JSON() } },
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(PRODUCTS_TABLE, null, {});
  },
};
