'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Collections', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      collectionName: {
        type: Sequelize.STRING
      },
      store: {
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
    await queryInterface.dropTable('Collections');
  }
};