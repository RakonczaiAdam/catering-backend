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

const findByTable = async (tableId)=>{
    const transaction = await Transactions.findOne({
        where: {
            tableUsed: tableId,
            closedAt: null
        }
    })
    return transaction
}

const addCollection = async (tableId, collection)=>{
    const transaction = await findByTable(tableId)
    const updatedTransaction = await transaction.update({
        collection
    })
    return updatedTransaction
}

const closeTransaction = async (tableId)=>{
    const transaction = await findByTable(tableId)
    const updatedTransaction = await transaction.update({
        closedAt: new Date()
    })
    return updatedTransaction
}

const updateTable = async (tableId, newTable)=>{
    const transaction = await findByTable(tableId)
    const updatedTransaction = await transaction.update({
        tableUsed: newTable
    })
    return updatedTransaction
}

module.exports = { 
    create, 
    findById, 
    findByTable,
    addCollection,
    closeTransaction,
    updateTable
}