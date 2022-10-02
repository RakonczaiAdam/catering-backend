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
    static associate({Companies, Items}) {
      this.belongsTo(Companies, {foreignKey: 'company'}),
      this.hasMany(Items, {foreignKey: 'vat'})
    }
  }
  Vats.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    vatName: DataTypes.STRING,
    collectorNumber: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    company: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vats',
  });
  return Vats;
};