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
    static associate({Companies, Stores, UserStores, Transactions, Coupons}) {
      this.belongsTo(Companies, {foreignKey: 'company'}),
      this.belongsToMany(Stores, {through: UserStores}),
      this.hasMany(Transactions, {foreignKey: 'user'}),
      this.hasMany(Coupons, {foreignKey: 'madeBy'})
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