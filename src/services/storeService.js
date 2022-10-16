const { FieldConflictError } = require('../helpers/error');
const { nameChecker } = require('../helpers/nameChecker');
const { Stores, Items, Users, ItemStores, UserStores, ItemsStores } = require('../models');

const create = async (storeData)=>{
    if(nameChecker('Stores', storeData.storeName, 'company', storeData.company)){
        return new FieldConflictError("User", "name");
    }
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

const findByUser = async (userId)=>{
    const stores = await UserStores.findAll({
        where: {
            user: userId
        },
        include: [
            {
                model: Stores
            }
        ],
        order: [
            ['createdAt', 'DESC']
        ] 
    })
    return stores
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

const findById = async (storeId)=>{
    const store = await Stores.findOne({
        where: {
            id: storeId
        }
    })
    return store
}

const update = async (storeData)=>{
    const {id, storeName} = storeData
    const store = await findById(id)
    const updatedStore = await store.update({
        storeName
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

const findUsers = async (storeId)=>{
    const users = await UserStores.findAll({
        where: {
            store: storeId
        },
        include: [
            {
                model: Users
            }
        ]
    })
    return users
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

const findItems = async (storeId)=>{
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

module.exports = { 
    create,
    findAllByCompany,
    findById,
    findItemStores,
    findByUser,
    update,
    remove,
    addUser,
    removeUser,
    findUsers,
    addItem,
    removeItem,
    findItems
}