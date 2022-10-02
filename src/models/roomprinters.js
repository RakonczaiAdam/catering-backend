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
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    room: DataTypes.STRING,
    printer: DataTypes.STRING,
    reservation: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'RoomPrinters',
  });
  return RoomPrinters;
};