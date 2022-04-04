'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stores', [{
      storeName: 'kisfecske',
      company: 5,
      country: 'Hungary',
      region: 'Pest',
      city: 'Budapest',
      address: 'Kő utca 10',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      storeName: 'nagyfecske',
      company: 5,
      country: 'Hungary',
      region: 'Pest',
      city: 'Budapest',
      address: 'Leves úr 69',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      storeName: 'bartook',
      company: 6,
      country: 'Hungary',
      region: 'Pest',
      city: 'Budapest',
      address: 'Joint körút 420',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      storeName: 'pajta',
      company: 7,
      country: 'Hungary',
      region: 'Vas',
      city: 'Őri',
      address: 'Templomszer 15',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};
