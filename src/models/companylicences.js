'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyLicences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Companies, Licences}) {
      // define association here
      this.belongsTo(Companies, {foreignKey: 'id', as: 'companyId'}),
      this.belongsTo(Licences, {foreignKey: 'id', as: 'licenceId'})
    }
  }
  CompanyLicences.init({
    licence: DataTypes.INTEGER,
    company: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CompanyLicences',
  });
  return CompanyLicences;
};