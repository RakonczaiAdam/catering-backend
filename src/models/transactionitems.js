'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      this.belongsTo(Users, {foreignKey: 'createdBy'})
    }
  }
  TransactionItems.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    transaction: DataTypes.STRING,
    item: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TransactionItems',
  });
  return TransactionItems;
};