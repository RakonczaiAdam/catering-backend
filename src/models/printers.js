'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Printers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stores, Rooms, RoomPrinters, Items, ItemPrinters}) {
      this.belongsTo(Stores, {foreignKey: 'store'}),
      this.belongsToMany(Rooms, {through: RoomPrinters}),
      this.belongsToMany(Items, {through: ItemPrinters})
    }
  }
  Printers.init({
    printerName: DataTypes.STRING,
    share: DataTypes.STRING,
    isOn: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Printers',
  });
  return Printers;
};