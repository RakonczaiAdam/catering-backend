'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies', [{
        companyName: 'Apple',
        password: 'root',
        country: 'USA',
        region: "New York",
        city: 'New Yrok',
        address: 'Ham street 22',
        taxNumber: '8989',
        email: 'manager@apple.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyName: 'Catering',
        password: 'root',
        country: 'Hungary',
        city: 'Budapest',
        region: 'Pest',
        address: 'Szabolcska Mihály utca 1',
        taxNumber: '1114',
        email: 'radamka97@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {})
  }
};
