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
    static associate({Users}) {
      this.belongsTo(Users, {foreignKey: "createdBy"})
    }
  }
  UserStores.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    user: DataTypes.STRING,
    store: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserStores',
  });
  return UserStores;
};