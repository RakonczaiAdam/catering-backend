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
    static associate({Locations, Companies, Users, UserStores, Printers, Categories, Collections, Rooms, Items, ItemStores}) {
      this.belongsTo(Locations, {foreignKey: 'location'}),
      this.belongsTo(Companies, {foreignKey: 'company'}),
      this.belongsToMany(Users, {through: UserStores}),
      this.hasMany(Printers, {foreignKey: 'store'}),
      this.hasMany(Categories, {foreignKey: 'store'}),
      this.hasMany(Collections, {foreignKey: 'store'}),
      this.hasMany(Rooms, {foreignKey: 'store'}),
      this.belongsToMany(Items, {through: ItemStores})
    }
  }
  Stores.init({
    storeName: DataTypes.STRING,
    company: DataTypes.INTEGER,
    location: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stores',
  });
  return Stores;
};