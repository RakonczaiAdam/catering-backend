'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stores, LogicalPrinters, Vats, TransactionItems}) {
      // define association here
      this.belongsTo(Stores, {foreignKey:'store', as: 'storeId'}),
      this.belongsTo(LogicalPrinters, {foreignKey:'id', as: 'logicalPrinterId'}),
      this.belongsTo(Vats, {foreignKey:'id', as: 'vatId'}),
      this.hasMany(TransactionItems, {foreignKey:'id', as: 'transactionItemId'})
    }
  }
  Items.init({
    itemName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    store: DataTypes.INTEGER,
    logicalPrinter: DataTypes.INTEGER,
    vat: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    unit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Items',
  });
  return Items;
};