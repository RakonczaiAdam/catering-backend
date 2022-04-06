'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LogicalPrinters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Items}) {
      // define association here
      this.hasMany(Items, {foreignKey:'id', as: 'itemId'})
    }
  }
  LogicalPrinters.init({
    logicalPrinterName: DataTypes.STRING,
    share: DataTypes.STRING,
    isOn: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'LogicalPrinters',
  });
  return LogicalPrinters;
};