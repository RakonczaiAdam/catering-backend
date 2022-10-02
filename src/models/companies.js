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
    static associate({Locations, Licences, CompanyLicences, Vats, Items, Coupons, Stores, Users}) {
      this.belongsTo(Locations, {foreignKey: 'location'}),
      this.belongsToMany(Licences, {through: CompanyLicences}),
      this.hasMany(Stores, {foreignKey: 'company'}),
      this.hasMany(Users, {foreignKey: 'company'}),
      this.hasMany(Vats, {foreignKey: 'company'}),
      this.hasMany(Items, {foreignKey: 'company'}),
      this.hasMany(Coupons, {foreignKey: 'company'})
    }
  }
  Companies.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    companyName: DataTypes.STRING,
    location: DataTypes.STRING,
    taxNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Companies',
  });
  return Companies;
};