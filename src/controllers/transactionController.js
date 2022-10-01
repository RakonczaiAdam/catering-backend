const transactionService = require('../services/transactionService')
const transactionItemService = require('../services/transactionItemService')

const createTransaction = async (req, res)=>{
    try{
        const transaction = await transactionService({
            tableUsed: req.body.tableUsed,
            user: req.body.user,
            collection: req.body.collection,
            closedAt: null
        })
        return res.json(transaction)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const closeTransaction = async (req, res)=>{
    try{
        const { tableId: table } = req.params
        const transaction = await transactionService.closeTransaction(table)
        return res.json(transaction)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const updateTable = async (req, res)=>{
    try{
        const { tableId: table } = req.params
        const transaction = await transactionService.updateTable(table, req.body.newTable)
        return res.json(transaction)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const findByTable = async (req, res)=>{
    try{
        const { tableId: table } = req.params
        const transaction = await transactionService.findByTable(table)
        return res.json(transaction)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const findById = async (req, res)=>{
    try{
        const { transactionId: id } = req.params
        const transaction = await transactionService.findById(id)
        return res.json(transaction)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const addCollection = async (req, res)=>{
    try{
        const { tableId: table } = req.params
        const transaction = await transactionService.addCollection(table, req.body.collection)
        return res.json(transaction)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const addTransactionItem = async (req, res)=>{
    try{
        const transactionItem = await transactionItemService({
            transaction: req.body.transaction,
            item: req.body.item,
            amount: req.body.amount,
        })
        return res.json(transactionItem)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const findTransactionItems = async (req, res)=>{
    try{
        const { tableId: table } = req.params
        const transaction = await transactionService.findByTable(table)
        const transactionItems = await transactionItemService.findbyTransaction(transaction.id)
        return res.json(transactionItems)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const deleteTransactionItem = async (req, res)=>{
    try{
        const { transactionItemId: id } = req.params
        const deletedRow = await transactionItemService.remove(id)
        return res.json(deletedRow)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const separateTransactionItems = async (req, res)=>{
    try{
        const { tableId: table } = req.params
        const transaction = await transactionService.findByTable(table)
        const transactionItems = await transactionItemService.findbyTransaction(transaction.id)
        const { separateIds } = req.body
        const newTransaction = await transactionService.create({
            tableUsed: table,
            user: req.user.id,
            collection: transaction.collection,
            closedAt: new Date()
        })
        transactionItems.forEach(async transactionItem => {
            if(separateIds.includes(transactionItem.id)){
                await transactionItemService.update({
                    transaction: newTransaction.id
                })
            }
        })
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createTransaction,
    closeTransaction,
    updateTable,
    findByTable,
    addCollection,
    addTransactionItem,
    findTransactionItems,
    deleteTransactionItem,
    separateTransactionItems,
    findById
}