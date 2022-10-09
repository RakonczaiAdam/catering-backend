'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Printers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      printerName: {
        type: Sequelize.STRING
      },
      share: {
        type: Sequelize.STRING
      },
      isOn: {
        type: Sequelize.BOOLEAN
      },
      store:{
        type: Sequelize.STRING,
        references: {
          model: 'Stores',
          key: 'id'
        }
      },
      createdBy: {
        type: Sequelize.STRING,
        references: {
          model: 'Users',
          key: 'id'
        }
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
    await queryInterface.dropTable('Printers');
  }
};