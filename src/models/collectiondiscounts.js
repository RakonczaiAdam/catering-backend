'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CollectionDiscounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CollectionDiscounts.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    collection: DataTypes.STRING,
    discount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CollectionDiscount',
  });
  return CollectionDiscounts;
};