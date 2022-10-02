'use strict';

const { v4: uuid4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Licences', [
      {
         id: uuid4(),
         licenceName: 'basic',
         userLimit: 5,
         period: 30, // days
         price: 5000,
         currency: 'Ft',
         createdAt: new Date(),
         updatedAt: new Date()
       }
      ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Licences', null, {});
  }
};
