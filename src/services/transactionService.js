const { Transactions } = require('../models')

const create = async (transactionData)=>{
    const transaction = await Transactions.create(transactionData)
    return transaction
}

const findById = async (transactionId)=>{
    const transaction = await Transactions.findOne({
        where: {
            id: transactionId
        }
    })
    return transaction
}

const addCollection = async (transactionId, collection)=>{
    const transaction = await findById(transactionId)
    const updatedTransaction = await transaction.update({
        collection
    })
    return updatedTransaction
}

module.exports = { create, findById, addCollection}