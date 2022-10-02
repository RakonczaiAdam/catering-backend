'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Collections, Items, Categories, CollectionDiscounts, Store}) {
      this.belongsToMany(Collections, {through: CollectionDiscounts}),
      this.belongsTo(Items, {foreignKey: 'item'}),
      this.belongsTo(Categories, {foreignKey: 'category'}),
      this.belongsTo(Store, {foreignKey: 'store'})
    }
  }
  Discounts.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    discountName: DataTypes.STRING,
    item: DataTypes.STRING,
    category: DataTypes.STRING,
    store: DataTypes.STRING,
    value: DataTypes.INTEGER,
    precentage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Discounts',
  });
  return Discounts;
};