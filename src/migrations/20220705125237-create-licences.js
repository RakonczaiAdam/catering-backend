'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Licences', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      licenceName: {
        type: Sequelize.STRING
      },
      userLimit: {
        type: Sequelize.INTEGER
      },
      period: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      currency: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Licences');
  }
};