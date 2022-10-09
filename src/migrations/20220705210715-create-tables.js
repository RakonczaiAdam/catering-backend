'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tables', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      tableName: {
        type: Sequelize.STRING
      },
      room: {
        type: Sequelize.STRING,
        references: {
          model: 'Rooms',
          key: 'id'
        }
      },
      placeX: {
        type: Sequelize.INTEGER
      },
      placeY: {
        type: Sequelize.INTEGER
      },
      state: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Tables');
  }
};