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
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    item: DataTypes.STRING,
    printer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ItemPrinters',
  });
  return ItemPrinters;
};