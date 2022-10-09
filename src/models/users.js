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
    static associate({
      Companies, Stores, UserStores, Transactions, Coupons,
      Categories, Collections, Printers, Reservations, RoomPrinters,
      Rooms, Tables, Vats, Items, ItemsStores, ItemPrinters, 
      Deliveries, TransactionItems, Discounts, CollectionDiscounts, Users
    }) {
      this.belongsTo(Companies, {foreignKey: 'company'}),
      this.belongsTo(Users, {foreignKey: 'createdBy'}),
      this.belongsToMany(Stores, {through: UserStores}),
      this.hasMany(Transactions, {foreignKey: 'createdBy'}),
      this.hasMany(Coupons, {foreignKey: 'createdBy'}),
      this.hasMany(Categories, {foreignKey: 'createdBy'}),
      this.hasMany(Collections, {foreignKey: 'createdBy'}),
      this.hasMany(Printers, {foreignKey: 'createdBy'}),
      this.hasMany(Reservations, {foreignKey: 'createdBy'}),
      this.hasMany(RoomPrinters, {foreignKey: 'createdBy'}),
      this.hasMany(Rooms, {foreignKey: 'createdBy'}),
      this.hasMany(Stores, {foreignKey: 'createdBy'}),
      this.hasMany(Tables, {foreignKey: 'createdBy'}),
      this.hasMany(UserStores, {foreignKey: 'createdBy'}),
      this.hasMany(Vats, {foreignKey: 'createdBy'}),
      this.hasMany(Items, {foreignKey: 'createdBy'}),
      this.hasMany(ItemsStores, {foreignKey: 'createdBy'}),
      this.hasMany(ItemPrinters, {foreignKey: 'createdBy'}),
      this.hasMany(Deliveries, {foreignKey: 'createdBy'}),
      this.hasMany(TransactionItems, {foreignKey: 'createdBy'}),
      this.hasMany(Discounts, {foreignKey: 'createdBy'}),
      this.hasMany(CollectionDiscounts, {foreignKey: 'createdBy'})
    }
  }
  Users.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    company: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};