const models = require('../models')

const resolveName = {
    Users: 'userName',
    Stores: 'storeName',
    Vats: 'vatName',
    Printers: 'printerName',
    Items: 'itemName',
    Rooms: 'roomName',
    Categories: 'categoryName',
    Collections: 'collectionName',
    Tables: 'tableName',
    Discounts: 'discountName'
};

exports.nameChecker = async (model, entityName, foreignKey, foreignKeyValue) => {
    return eval(`await models.${model}.findAll({
        where: {
            ${foreignKey}: ${foreignKeyValue},
            ${resolveName(model)}: ${entityName}
        }
    })`);
}