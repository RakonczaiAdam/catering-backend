'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Items}) {
      // define association here
      this.hasMany(Items, {foreignKey:'id', as:'itemId'})
    }
  }
  Vats.init({
    vatName: DataTypes.STRING,
    collectorNumber: DataTypes.INTEGER,
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vats',
  });
  return Vats;
};