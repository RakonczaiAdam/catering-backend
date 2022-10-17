const { Op } = require('sequelize');
const { FieldConflictError } = require('../helpers/error');
const { nameChecker } = require('../helpers/nameChecker');
const { Items, Deliveries, ItemStores } = require('../models')

const create = async (itemData)=>{
    if(nameChecker('Items', itemData.itemName, 'category', itemData.category)){
        return new FieldConflictError("Item", "name");
    }
    const item = await Items.create(itemData).then().catch((error)=>console.error(error))
    return item
}

const findByCategory = async (categoryId)=>{
    const items = await Items.findAll({
        where: {
            category: categoryId
        }
    })
    return items
}

const findByCompany = async (companyId)=>{
    const items = await Items.findAll({
        where: {
            company: companyId
        }
    })
    return items
}

const findByStore = async (storeId)=>{
    const items = await ItemStores.findAll({
        where: {
            store: storeId
        },
        include: [
            {
                model: Items
            }
        ]
    })
}

const findById = async (itemId)=>{
    const item = await Items.findOne({
        where: {
            id: itemId
        }
    })
    return item
}

const remove = async (itemId)=>{
    const deletedItem = await Items.destroy({
        where: {
            id: itemId
        }
    })
    return deletedItem
}

const update = async (itemData)=>{
    const { id, itemName, color, price, category, vat, stock, unit, company } = itemData
    const item = await findById(id)
    const updatedItem = await item.update({
        itemName,
        color,
        price,
        category,
        vat,
        stock,
        unit,
        company
    })
    return updatedItem
}

const updateStock = async (itemId, value)=>{
    const item = await findById(itemId)
    const updatedItem = await item.update({
        stock: (item.stock+value)
    })
    return updatedItem
}

const createDelivery = async (deliveryData)=>{
    const delivery = await Deliveries.create(deliveryData)
    return delivery
}

const findDelivery = async (deliveryId)=>{
    const delivery = await Deliveries.findOne({
        where: {
            id: deliveryId
        }
    })
    return delivery
}

const findDeliveries = async (itemId)=>{
    const deliveries = await Deliveries.findAll({
        where: {
            item: itemId
        }
    })
    return deliveries
}

const removeDelivery = async (deliveryId)=>{
    const removedDelivery = await Deliveries.destroy({
        where: {
            id: deliveryId
        }
    })
    return removedDelivery
}

const removeDeliveries = async (date, itemId)=>{
    const removedDeliveries = await Deliveries.destroy({
        where: {
            received: {[Op.lte]: date},
            item: itemId
        }
    })
    return removedDeliveries
}

module.exports = {
    create, 
    findByCategory, 
    findByCompany,
    findByStore,
    findById, 
    remove, 
    update,
    updateStock, 
    createDelivery, 
    removeDelivery, 
    removeDeliveries,
    findDelivery, 
    findDeliveries
}