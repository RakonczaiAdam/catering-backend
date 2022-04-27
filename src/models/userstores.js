'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserStores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, Stores}) {
      // define association here
      this.belongsTo(Users, {foreignKey: 'user'}),
      this.belongsTo(Stores, {foreignKey: 'store'})
    }
  }
  UserStores.init({
    user: DataTypes.INTEGER,
    store: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserStores',
  });
  return UserStores;
};