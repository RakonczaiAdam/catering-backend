const { Op } = require('sequelize')
const { Discounts, Collections } = require('../models')

const create = async (discountData)=>{
    const discount = await Discounts.create(discountData)
    return discount
}

const findByCollection = async (collectionId)=>{
    const discounts = await Discounts.findAll({
        where: {
            collection: collectionId
        }
    })
    return discounts
}

const findByStore = async (storeId)=>{
    const discounts = await Discounts.findAll({
        where: {
            '$Collection.store$': {[Op.eq]: storeId}
        },
        include: [
            {
                model: Collections,
                as: 'Collection'
            }
        ]
    })
    return discounts
}

const findById = async (discountId)=>{
    const discount = await Discounts.findOne({
        where: {
            id: discountId
        }
    })
    return discount
}

const remove = async (discountId)=>{
    const deletedDiscount = await Discounts.destroy({
        where: {
            id: discountId
        }
    })
    return deletedDiscount
}

const update = async (discountData)=>{
    const { id, discountname, collection, item, category, value, precentage }= discountData
    const discount = await findById(id)
    const updatedDiscount = await discount.update({
        discountname,
        collection,
        item,
        category,
        value,
        precentage
    })
    return updatedDiscount
}

module.exports = {
    create,
    findById,
    findByCollection,
    findByStore,
    remove,
    update
}