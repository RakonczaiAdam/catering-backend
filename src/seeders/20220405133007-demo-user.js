'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
        company: 5,
        name: 'John Doe',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        company: 5,
        name: 'Kon Loe',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        company: 6,
        name: 'Don Doe',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
       }
       ,{
        company: 7,
        name: 'Rakonczai Adam',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
       }
       ,{
        company: 7,
        name: 'James Titanilla',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        company: 8,
        name: 'Kakis Kuki',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
       }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
