'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stores, Categories, Items, Discounts}) {
      this.belongsTo(Stores, {foreignKey: 'store'}),
      this.belongsTo(Categories, {foreignKey: 'parent'}),
      this.hasMany(Items, {foreignKey: 'category'}),
      this.hasMany(Discounts, {foreignKey: 'category'})
    }
  }
  Categories.init({
    categoryName: DataTypes.STRING,
    color: DataTypes.STRING,
    parent: DataTypes.INTEGER,
    store: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};