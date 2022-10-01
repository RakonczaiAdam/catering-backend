'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomPrinters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoomPrinters.init({
    room: DataTypes.INTEGER,
    printer: DataTypes.INTEGER,
    reservation: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'RoomPrinters',
  });
  return RoomPrinters;
};