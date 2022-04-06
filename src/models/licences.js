'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Licences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({CompanyLicences}) {
      // define association here
      this.hasMany(CompanyLicences, {foreignKey:'id', as: 'companyLicenceId'})
    }
  }
  Licences.init({
    licenceName: DataTypes.STRING,
    userLimit: DataTypes.INTEGER,
    period: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    currency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Licences',
  });
  return Licences;
};