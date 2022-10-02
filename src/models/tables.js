'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Rooms, Reservations, Transactions}) {
      this.belongsTo(Rooms, {foreignKey: 'room'}),
      this.hasMany(Reservations, {foreignKey: 'table'}),
      this.hasMany(Transactions, {foreignKey: 'tableUsed'})
    }
  }
  Tables.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    tableName: DataTypes.STRING,
    room: DataTypes.STRING,
    placeX: DataTypes.INTEGER,
    placeY: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tables',
  });
  return Tables;
};