'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      itemName: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      vat: {
        type: Sequelize.STRING,
        references: {
          model: 'Vats',
          key: 'id'
        }
      },
      company: {
        type: Sequelize.STRING,
        references: {
          model: 'Companies',
          key: 'id'
        }
      },
      stock: {
        type: Sequelize.INTEGER
      },
      unit: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Items');
  }
};