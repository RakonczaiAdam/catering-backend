'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Deliveries', {
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
      quantity: {
        type: Sequelize.INTEGER
      },
      received: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Deliveries');
  }
};