'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Companies}) {
      // define association here
      this.belongsTo(Companies, {foreignKey: 'id', as: 'companyId'})
    }
  }
  Stores.init({
    storeName: DataTypes.STRING,
    company: DataTypes.INTEGER,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stores',
  });
  return Stores;
};