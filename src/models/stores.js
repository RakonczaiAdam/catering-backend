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
    static associate({Locations, Companies, Users, UserStores, Discounts,
        Printers, Categories, Collections, Rooms, Items, ItemStores}) {
      this.belongsTo(Locations, {foreignKey: 'location'}),
      this.belongsTo(Companies, {foreignKey: 'company'}),
      this.belongsTo(Users, {foreignKey: 'createdBy'}),
      this.belongsToMany(Users, {through: UserStores}),
      this.belongsToMany(Items, {through: ItemStores}),
      this.hasMany(Printers, {foreignKey: 'store'}),
      this.hasMany(Categories, {foreignKey: 'store'}),
      this.hasMany(Collections, {foreignKey: 'store'}),
      this.hasMany(Rooms, {foreignKey: 'store'}),
      this.hasMany(Discounts, {foreignKey: 'store'})
    }
  }
  Stores.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    storeName: DataTypes.STRING,
    company: DataTypes.STRING,
    location: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stores',
  });
  return Stores;
};