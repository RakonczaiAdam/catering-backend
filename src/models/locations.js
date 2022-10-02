'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Companies, Stores}) {
      this.hasOne(Companies, {foreignKey: 'location'})
      this.hasOne(Stores, {foreignKey: 'location'})
    }
  }
  Locations.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Locations',
  });
  return Locations;
};