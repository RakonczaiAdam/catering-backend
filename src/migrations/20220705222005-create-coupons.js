'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Coupons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activationCode: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.INTEGER
      },
      expirationDate: {
        type: Sequelize.DATE
      },
      customerEmail: {
        type: Sequelize.STRING
      },
      madeBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      transaction: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Transactions',
          key: 'id'
        }
      },
      company: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Companies',
          key: 'id'
        }
      },
      unUsed: {
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
    await queryInterface.dropTable('Coupons');
  }
};