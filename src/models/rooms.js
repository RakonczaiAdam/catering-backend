'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stores, Printers, RoomPrinters, Tables}) {
      this.belongsTo(Stores, {foreignKey: 'store'}),
      this.belongsToMany(Printers, {through: RoomPrinters}),
      this.hasMany(Tables, {foreignKey: 'room'})
    }
  }
  Rooms.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    roomName: DataTypes.STRING,
    store: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rooms',
  });
  return Rooms;
};