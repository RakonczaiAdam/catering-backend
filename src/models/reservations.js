'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tables}) {
      this.belongsTo(Tables, {foreignKey: 'table'})
    }
  }
  Reservations.init({
    table: DataTypes.INTEGER,
    start: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reservations',
  });
  return Reservations;
};