'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      categoryName: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      parent: {
        type: Sequelize.STRING,
        references: {
          model: 'Categories',
          key: 'id'
        }
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
    await queryInterface.dropTable('Categories');
  }
};