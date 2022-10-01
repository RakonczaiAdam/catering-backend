'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Printers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      printerName: {
        type: Sequelize.STRING
      },
      share: {
        type: Sequelize.STRING
      },
      isOn: {
        type: Sequelize.BOOLEAN
      },
      store:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Stores',
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
    await queryInterface.dropTable('Printers');
  }
};