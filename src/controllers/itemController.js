const { Items, Stores } = require('../models')
const itemService = require('../services/itemService')
const { v4: uuid4 } = require('uuid');

const createItem = async (req, res)=>{
    try{
        const item = await itemService.create({
            id: uuid4,
            ...req.body 
        })
        return res.json(item)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findItemsByCompany = async (req, res)=>{
    try{
        const items = await itemService.findByCompany(req.user.company)
        return res.json(items)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findItemsByCategory = async (req, res)=>{
    try{
        const items = await itemService.findByCategory(req.params.categoryId)
        return res.json(items)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findItemsByStore = async (req, res)=>{
    try{
        const items = await itemService.findByStore(req.params.storeId)
        return res.json(items)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteItem = async (req, res)=>{
    try{
        const {itemId: id} = req.params
        const deletedRows = await itemService.remove(id)
        return res.json(deletedRows)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const updateItem = async (req, res)=>{
    try{
        const {itemId: id} = req.params
        const item = await itemService.update({id, ...req.body})
        return res.json(item)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const addDelivery = async (req, res)=>{
    try{
        const delivery = await itemService.createDelivery(req.body)
        await itemService.updateStock(delivery.item, delivery.quantity)
        return res.json(delivery)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteDelivery = async (req, res)=>{
    try{
        const { deliveryId: id} = req.params
        const delivery = await itemService.findDelivery(id)
        await itemService.updateStock(delivery.item, -delivery.quantity)
        const deletedDelivery = await itemService.removeDelivery(delivery.id)
        return deletedDelivery
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteOldDeliveries = async (req, res)=>{
    try{
        const { itemId: item } = req.params
        const { received } = req.body
        const deletedRows = await itemService.removeDeliveries(received, item)
        return deletedRows
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findDeliveriesByItem = async (req, res)=>{
    try{
        const { itemId: item} = req.params
        const deliveries = await itemService.findDeliveries(item)
        return deliveries
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createItem,
    findItemsByCompany,
    findItemsByCategory,
    findItemsByStore,
    updateItem,
    deleteItem,
    addDelivery,
    deleteDelivery,
    deleteOldDeliveries,
    findDeliveriesByItem
}