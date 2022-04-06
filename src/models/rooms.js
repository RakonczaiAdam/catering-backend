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
    static associate({Stores}) {
      // define association here
      this.belongsTo(Stores, {foreignKey: 'id', as: 'storeId'})
    }
  }
  Rooms.init({
    roomName: DataTypes.STRING,
    store: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rooms',
  });
  return Rooms;
};