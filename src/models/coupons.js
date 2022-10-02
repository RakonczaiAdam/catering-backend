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
    static associate({Users, Transactions, Companies}) {
      this.belongsTo(Users, {foreignKey: 'madeBy'}),
      this.belongsTo(Transactions, {foreignKey: 'transaction'}),
      this.belongsTo(Companies, {foreignKey: 'company'})
    }
  }
  Coupons.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    activationCode: DataTypes.STRING,
    value: DataTypes.INTEGER,
    expirationDate: DataTypes.DATE,
    customerEmail: DataTypes.STRING,
    madeBy: DataTypes.STRING,
    transaction: DataTypes.STRING,
    company: DataTypes.STRING,
    unUsed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Coupons',
  });
  return Coupons;
};