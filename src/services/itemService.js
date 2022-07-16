const { Items, Deliveries } = require('../models')

const createItem = async (itemData)=>{
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

const updateStock = async (itemId, value)=>{
    const item = await findById(itemId)
    const updatedItem = await item.update({
        stock: (item.stock+value)
    })
    return updatedItem
}

/**
 * @description creates delivery record and updates the item stock value
 */
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

/**
 * @description deletes delivery record and updates the item stock value
 */
const removeDelivery = async (deliveryId)=>{
    const removedDelivery = await Deliveries.destroy({
        where: {
            id: deliveryId
        }
    })
    return removedDelivery
}

module.exports = {createItem, findByCategory, findById, remove, updateStock, createDelivery, removeDelivery, findDelivery, findDeliveries}