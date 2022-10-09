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
    static associate({Users}) {
      this.belongsTo(Users, {foreignKey: 'createdBy'})
    }
  }
  ItemPrinters.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    item: DataTypes.STRING,
    printer: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ItemPrinters',
  });
  return ItemPrinters;
};