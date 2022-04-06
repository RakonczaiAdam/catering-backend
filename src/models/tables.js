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
    static associate({Rooms, Transactions}) {
      // define association here
      this.belongsTo(Rooms, {foreignKey: 'id', as: 'roomId'}),
      this.hasMany(Transactions, {foreignKey:'id', as:'transactionId'})
    }
  }
  Tables.init({
    tableName: DataTypes.STRING,
    room: DataTypes.INTEGER,
    placeX: DataTypes.INTEGER,
    placeY: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tables',
  });
  return Tables;
};