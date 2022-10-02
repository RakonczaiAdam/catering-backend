'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CompanyLicences', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING,
        references: {
          model: 'Companies',
          key: 'id'
        }
      },
      licence: {
        type: Sequelize.STRING,
        references: {
          model: 'Licences',
          key: 'id'
        }
      },
      active: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('CompanyLicences');
  }
};