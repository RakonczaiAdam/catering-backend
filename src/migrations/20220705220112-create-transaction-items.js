'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransactionItems', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      transaction: {
        type: Sequelize.STRING,
        references: {
          model: 'Transactions',
          key: 'id'
        }
      },
      item: {
        type: Sequelize.STRING,
        references: {
          model: 'Items',
          key: 'id'
        }
      },
      amount: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('TransactionItems');
  }
};