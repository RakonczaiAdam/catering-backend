'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemName: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      store: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stores',
          key: 'id'
        }
      },
      logicalPrinter: {
        type: Sequelize.INTEGER,
        references: {
          model: 'LogicalPrinters',
          key: 'id'
        }
      },
      vat: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vats',
          key: 'id'
        }
      },
      stock: {
        type: Sequelize.INTEGER
      },
      unit: {
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
    await queryInterface.dropTable('Items');
  }
};