const { TransactionItems } = require('../models')

const create = async (transactionItemData)=>{
    const transactionItem = await TransactionItems.create(transactionItemData)
    return transactionItem
}

const findbyTransaction = async (transactionId)=>{
    const transactionItems = await TransactionItems.findAll({
        where: {
            transaction: transactionId
        }
    })
    return transactionItems
}

const findById = async (transactionItemId)=>{
    const transactionItem = await TransactionItems.findOne({
        where: {
            id: transactionItemId
        }
    })
    return transactionItem
}

const remove = async (transactionItemId)=>{
    const deletedTransactionItem = await TransactionItems.destroy({
        where: {
            id: transactionItemId
        }
    })
    return deletedTransactionItem
}

const update = async (transactionItemData)=>{
    const { id, transaction} = transactionItemData
    const transactionItem = await findById(id)
    const updatedTransactionItem = await transactionItem.update({
        transaction
    })
    return updatedTransactionItem
}

module.exports = {
    create,
    findById,
    findbyTransaction,
    remove,
    update
}