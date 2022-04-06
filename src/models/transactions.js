'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tables, Users, TransactionItems, Coupons}) {
      // define association here
      this.belongsTo(Tables, {foreignKey:'id', as: 'tableId'}),
      this.belongsTo(Users, {foreignKey:'id', as:'userId'}),
      this.hasMany(TransactionItems, {foreignKey:'id', as: 'transactionItemId'}),
      this.hasMany(Coupons, {foreignKey:'id', as: 'couponId'})
    }
  }
  Transactions.init({
    tableUsed: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
    closedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};