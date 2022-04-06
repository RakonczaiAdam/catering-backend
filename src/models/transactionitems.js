'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Transactions, Items}) {
      // define association here
      this.belongsTo(Transactions, {foreignKey:'id', as:'transactionId'}),
      this.belongsTo(Items, {foreignKey:'id', as:'itemId'})
    }
  }
  TransactionItems.init({
    transaction: DataTypes.INTEGER,
    item: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransactionItems',
  });
  return TransactionItems;
};