'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemStores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemStores.init({
    item: DataTypes.INTEGER,
    store: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemStores',
  });
  return ItemStores;
};