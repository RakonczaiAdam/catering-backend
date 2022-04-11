'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stores, Users, CompanyLicences, Coupons}) {
      // define association here
      this.hasMany(Stores, {foreignKey: 'id', as: 'storesId'}),
      this.hasMany(Users, {foreignKey:'id', as: 'userId'}),
      this.hasMany(CompanyLicences, {foreignKey:'id', as: 'companyLicenceId'}),
      this.hasMany(Coupons, {foreignKey:'id', as: 'couponsId'})
    }
  }
  Companies.init({
    companyName: DataTypes.STRING,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    taxNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Companies',
  });
  return Companies;
};