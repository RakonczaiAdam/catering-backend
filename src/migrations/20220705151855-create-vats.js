'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vats', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      vatName: {
        type: Sequelize.STRING
      },
      collectorNumber: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING,
        references: {
          model: 'Companies',
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
    await queryInterface.dropTable('Vats');
  }
};