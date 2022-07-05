'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deliveries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Items}) {
      this.belongsTo(Items, {foreignKey: 'item'})
    }
  }
  Deliveries.init({
    item: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    received: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Deliveries',
  });
  return Deliveries;
};