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
    static associate({Items, Users}) {
      this.belongsTo(Items, {foreignKey: 'item'}),
      this.belongsTo(Users, {foreignKey: 'createdBy'})
    }
  }
  Deliveries.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    item: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    received: DataTypes.DATE,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Deliveries',
  });
  return Deliveries;
};