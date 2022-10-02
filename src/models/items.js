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
    static associate({Categories, Vats, Companies, Stores, ItemStores, Printers, ItemPrinters, Deliveries, Transactions, TransactionItems, Discounts}) {
      this.belongsTo(Categories, {foreignKey: 'category'}),
      this.belongsTo(Vats, {foreignKey: 'vat'}),
      this.belongsTo(Companies, {foreignKey: 'company'}),
      this.belongsToMany(Stores, {through: ItemStores}),
      this.belongsToMany(Printers, {through: ItemPrinters}),
      this.hasMany(Deliveries, {foreignKey: 'item'}),
      this.belongsToMany(Transactions, {through: TransactionItems}),
      this.hasMany(Discounts, {foreignKey: 'item'})
    }
  }
  Items.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    itemName: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    vat: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    company: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Items',
  });
  return Items;
};