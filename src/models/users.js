'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Companies, UserStores, Transactions, Coupons}) {
      // define association here
      this.belongsTo(Companies, {foreignKey: 'id', as: 'companyId'}),
      this.hasMany(UserStores, {foreignKey: 'user'}),
      this.hasMany(Transactions, {foreignKey: 'id', as: 'transactionId'}),
      this.hasMany(Coupons, {foreignKey: 'id', as: 'couponId'})
    }
  }
  Users.init({
    company: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};