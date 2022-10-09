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
    static associate({Stores, Rooms, RoomPrinters, Items, ItemPrinters, Users}) {
      this.belongsTo(Stores, {foreignKey: 'store'}),
      this.belongsTo(Users, {foreignKey: 'createdBy'}),
      this.belongsToMany(Rooms, {through: RoomPrinters}),
      this.belongsToMany(Items, {through: ItemPrinters})
    }
  }
  Printers.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    printerName: DataTypes.STRING,
    share: DataTypes.STRING,
    isOn: DataTypes.BOOLEAN,
    store: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Printers',
  });
  return Printers;
};