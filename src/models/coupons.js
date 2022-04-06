'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, Companies, Transactions}) {
      // define association here
      this.belongsTo(Users, {foreignKey:'id', as:'userId'}),
      this.belongsTo(Companies, {foreignKey:'id', as:'companyId'}),
      this.belongsTo(Transactions, {foreignKey:'id', as:'transactionId'})
    }
  }
  Coupons.init({
    activationCode: DataTypes.STRING,
    value: DataTypes.INTEGER,
    expirationDate: DataTypes.DATE,
    customerEmail: DataTypes.STRING,
    madeBy: DataTypes.INTEGER,
    transaction: DataTypes.INTEGER,
    company: DataTypes.INTEGER,
    unUsed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Coupons',
  });
  return Coupons;
};