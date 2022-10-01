'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemPrinters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemPrinters.init({
    item: DataTypes.INTEGER,
    printer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemPrinters',
  });
  return ItemPrinters;
};