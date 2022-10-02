'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Discounts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      discountName: {
        type: Sequelize.STRING
      },
      collection: {
        type: Sequelize.STRING,
        references: {
          model: 'Collections',
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
      category: {
        type: Sequelize.STRING,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      value: {
        type: Sequelize.INTEGER
      },
      precentage: {
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
    await queryInterface.dropTable('Discounts');
  }
};