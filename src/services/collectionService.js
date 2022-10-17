const { Collections, CollectionDiscounts, Discounts } = require('../models')
const { nameChecker } = require('../helpers/nameChecker');
const { FieldConflictError } = require('../helpers/error');

const create = async (collectionData)=>{
    if(nameChecker('Collections', collectionData.collectionName, 'store', collectionData.store)){
        return new FieldConflictError("Collection", "name");
    }
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

const addDiscount = async (data)=> {
    const collectionDiscount = await CollectionDiscounts.create(data);
    return collectionDiscount;
}

const removeDiscount = async (collectionDiscountId)=> {
    const deleted = await CollectionDiscounts.destroy({
        where: {
            id: collectionDiscountId
        }
    })
    return deleted;
}

const findDiscounts = async (collectionId)=> {
    const discounts = await CollectionDiscounts.findAll({
        where: {
            collection: collectionId
        },
        include: [
            {
                model: Discounts
            },
            {
                model: Collections
            }
        ]  
    })

    return discounts;
}

module.exports = {
    create,
    findById,
    findByStore,
    remove,
    update,
    addDiscount,
    removeDiscount,
    findDiscounts
}