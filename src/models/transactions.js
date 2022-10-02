'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tables, Users, Collections, Items, TransactionItems, Coupons}) {
      this.belongsTo(Tables, {foreignKey: 'tableUsed'}),
      this.belongsTo(Users, {foreignKey: 'user'}),
      this.belongsTo(Collections, {foreignKey: 'collection'}),
      this.belongsToMany(Items, {through: TransactionItems}),
      this.hasMany(Coupons, {foreignKey: 'transaction'})
    }
  }
  Transactions.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    tableUsed: DataTypes.STRING,
    user: DataTypes.STRING,
    collection: DataTypes.STRING,
    closedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};