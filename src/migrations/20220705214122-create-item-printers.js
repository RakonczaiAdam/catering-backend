'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemPrinters', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      item: {
        type: Sequelize.STRING,
        references: {
          model: 'Items',
          key: 'id'
        }
      },
      printer: {
        type: Sequelize.STRING,
        references: {
          model: 'Printers',
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
    await queryInterface.dropTable('ItemPrinters');
  }
};