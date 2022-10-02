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
    static associate({Stores, Transactions, Discounts}) {
      this.belongsTo(Stores, {foreignKey: 'store'}),
      this.hasMany(Transactions, {foreignKey: 'collection'}),
      this.hasMany(Discounts, {foreignKey: 'collection'})
    }
  }
  Collections.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    collectionName: DataTypes.STRING,
    store: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Collections',
  });
  return Collections;
};