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
    static associate({Stores, Categories, Items, Discounts, Users}) {
      this.belongsTo(Stores, {foreignKey: 'store'}),
      this.belongsTo(Categories, {foreignKey: 'parent'}),
      this.belongsTo(Users, {foreignKey: 'createdBy'}),
      this.hasMany(Items, {foreignKey: 'category'}),
      this.hasMany(Discounts, {foreignKey: 'category'})
    }
  }
  Categories.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    categoryName: DataTypes.STRING,
    color: DataTypes.STRING,
    parent: DataTypes.STRING,
    store: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};