const { Collections } = require('../models')

const create = async (collectionData)=>{
    const collection = await Collections.create(collectionData)
    return collection
}

const findByStore = async (storeId)=>{
    const collections = await Collections.findAll({
        where: {
            store: storeId
        }
    })
    return collections
}

const findById = async (collectionId)=>{
    const collection = await Collections.findOne({
        where: {
            id: collectionId
        }
    })
    return collection
}

const remove = async (collectionId)=>{
    const deletedCollection = await Collections.destroy({
        where: {
            id: collectionId
        }
    })
    return deletedCollection
}

const update = async (collectionData)=>{
    const { id, collectionName, store } = collectionData
    const collection = await findById(id)
    const updatedCollection = await collection.update({
        collectionName,
        store
    })
    return updatedCollection
}

module.exports = {
    create,
    findById,
    findByStore,
    remove,
    update
}