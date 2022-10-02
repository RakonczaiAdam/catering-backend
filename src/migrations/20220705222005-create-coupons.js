'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Coupons', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      activationCode: {
        type: Sequelize.STRING,
        unique: true
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
        type: Sequelize.STRING,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      transaction: {
        type: Sequelize.STRING,
        references: {
          model: 'Transactions',
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