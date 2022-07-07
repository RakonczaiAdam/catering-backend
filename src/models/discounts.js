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
    static associate({Collections, Items, Categories}) {
      this.belongsTo(Collections, {foreignKey: 'collection'}),
      this.belongsTo(Items, {foreignKey: 'item'}),
      this.belongsTo(Categories, {foreignKey: 'category'})
    }
  }
  Discounts.init({
    discountName: DataTypes.STRING,
    collection: DataTypes.INTEGER,
    item: DataTypes.INTEGER,
    category: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    precentage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Discounts',
  });
  return Discounts;
};