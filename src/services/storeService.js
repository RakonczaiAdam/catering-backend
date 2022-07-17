const { Stores, Items, UserStores, ItemsStores } = require('../models');

const create = async (storeData)=>{
    const store = await Stores.create(storeData)
    return store
}

const findAllByCompany = async (companyId)=>{
    const stores = await Stores.findAll({
        where: {
            company: companyId
        }
    })
    return stores
}

const findById = async (storeId)=>{
    const store = await Stores.findOne({
        where: {
            id: storeId
        }
    })
    return store
}

const update = async (storeData)=>{
    const {id, storeName, company, location} = storeData
    const store = await findById(id)
    const updatedStore = await store.update({
        storeName,
        company,
        location
    })
    return updatedStore
}

const remove = async (storeId)=>{
    const deletedStore = await Stores.destroy({
        where: {
            id: storeId
        }
    })
    return deletedStore
}

const addUser = async (userStoreData)=>{
    const userStore = await UserStores.create(userStoreData)
    return userStore
}

const removeUser = async (userStoreId)=>{
    const deletedUserStore = await UserStores.destroy({
        where: {
            id: userStoreId
        }
    })
    return deletedUserStore
}

const addItem = async (itemStoreData)=>{
    const itemStore = await ItemsStores.create(itemStoreData)
    return itemStore
}

const removeItem = async (itemStoreId)=>{
    const deletedItemStore = await ItemsStores.destroy({
        where: {
            id: itemStoreId
        }
    })
    return deletedItemStore
}

const findItemStores = async (storeId)=>{
    const itemStores = await ItemsStores.findAll({
        where: {
            store: storeId
        },
        include: [
            {
                model: Items
            },
            {
                model: Stores
            }
        ]  
    })
    return itemStores
}

module.exports = { 
    create,
    findAllByCompany,
    findById,
    findItemStores,
    update,
    remove,
    addUser,
    removeUser,
    addItem,
    removeItem
}