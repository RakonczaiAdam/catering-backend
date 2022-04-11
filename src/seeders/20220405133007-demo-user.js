'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
        company: 5,
        userName: 'John Doe',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        company: 5,
        userName: 'Kon Loe',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        company: 6,
        userName: 'Don Doe',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
       }
       ,{
        company: 7,
        userName: 'Rakonczai Adam',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
       }
       ,{
        company: 7,
        userName: 'James Titanilla',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        company: 8,
        userName: 'Kakis Kuki',
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
