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
    static associate({Tables, Users}) {
      this.belongsTo(Tables, {foreignKey: 'table'}),
      this.belongsTo(Users, {foreignKey: 'createdBy'})
    }
  }
  Reservations.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    table: DataTypes.STRING,
    start: DataTypes.DATE,
    customerName: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservations',
  });
  return Reservations;
};