'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Companies, UserStores, Rooms, Items}) {
      // define association here
      this.belongsTo(Companies, {foreignKey: 'id', as: 'companyId'}),
      this.hasMany(UserStores, {foreignKey: 'store'}),
      this.hasMany(Rooms, {foreignKey: 'id', as: 'roomId'}),
      this.hasMany(Items, {foreignKey:'store', as: 'storeId'})
    }
  }
  Stores.init({
    storeName: DataTypes.STRING,
    company: DataTypes.INTEGER,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stores',
  });
  return Stores;
};