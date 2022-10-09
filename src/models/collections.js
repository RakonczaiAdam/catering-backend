'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stores, Transactions, Discounts, CollectionDiscounts, Users}) {
      this.belongsToMany(Discounts, {through: CollectionDiscounts}),
      this.belongsTo(Stores, {foreignKey: 'store'}),
      this.belongsTo(Users, {foreignKey: 'createdBy'}),
      this.hasMany(Transactions, {foreignKey: 'collection'})
    }
  }
  Collections.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    collectionName: DataTypes.STRING,
    store: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Collections',
  });
  return Collections;
};