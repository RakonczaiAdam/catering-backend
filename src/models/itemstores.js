'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemStores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      this.belongsTo(Users, {foreignKey: 'createdBy'})
    }
  }
  ItemStores.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    item: DataTypes.STRING,
    store: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ItemStores',
  });
  return ItemStores;
};