'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoomPrinters', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      room: {
        type: Sequelize.STRING,
        references: {
          model: 'Rooms',
          key: 'id'
        }
      },
      printer: {
        type: Sequelize.STRING,
        references: {
          model: 'Printers',
          key: 'id'
        }
      },
      reservation: {
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
    await queryInterface.dropTable('RoomPrinters');
  }
};