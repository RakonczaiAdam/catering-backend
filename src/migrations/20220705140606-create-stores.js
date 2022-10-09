'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stores', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      storeName: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING,
        references :{
          model: 'Companies',
          key: 'id'
        }
      },
      location: {
        type: Sequelize.STRING,
        references :{
          model: 'Locations',
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
    await queryInterface.dropTable('Stores');
  }
};