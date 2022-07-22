const storeService = require('../services/storeService')
const locationService = require('../services/locationService')
const userService = require('../services/userService')
const roomService = require("../services/roomService")

const createStore = async (req, res)=>{
    try{
        const {storeName, country, region, city, address} = req.body;
        const location = await locationService({
            country,
            region,
            city,
            address
        })
        const store = await storeService.create({
            storeName,
            company: req.user.company,
            location: location.id
        })
        const admins = await userService.findAdmins(req.user.company)
        admins.map(async admin=>{
            await storeService.addUser({
                user: admin.id,
                store: store.id
            }).catch(error => console.log(error))
        })
        await roomService.create({
            roomName: storeName+"room",
            store: store.id
        })
        return res.json(store)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findByCompany = async (req, res)=>{
    try{
        const stores = await storeService.findAllByCompany(req.user.company)
        return res.json(stores)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findByUser = async (req, res)=>{
    try{
        const stores = await storeService.findByUser(req.user.id)
        return res.json(stores)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const updateStore = async (req, res)=>{
    try{
        const {storeId: id} = req.params
        const { storeName, country, region, city, address } = req.body
        const store = await storeService.findById(id)
        const updatedLocation = await locationService.update({
            id: store.location,
            country,
            region,
            city,
            address
        })
        const updatedStore = await storeService.update({
            id: store.id,
            storeName,
        })
        return {updatedStore, updatedLocation}
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteStore = async(req, res)=>{
    try{
        const { storeId: id } = req.params
        const deletedRows = await storeService.remove(id)
        return res.json(deletedRows)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const addUser = async (req, res)=>{
    try{
        const userStore = await storeService.addUser({
            user: req.body.user,
            store: req.body.store
        })
        return userStore
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteUser = async (req, res)=>{
    try{
        const { userStoreId: id} = req.params
        const userStore = await storeService.removeUser(id)
        return userStore
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findUsers = async (req, res)=>{
    try{
        const { storeId: id } = req.params
        const userStore = await storeService.findUsers(id)
        return userStore
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}


const addItem = async (req, res)=>{
    try{
        const itemStore = await storeService.addItem({
            item: req.body.item,
            store: req.body.store
        })
        return itemStore
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteItem = async (req, res)=>{
    try{
        const { itemStoreId: id} = req.params
        const itemStore = await storeService.removeItem(id)
        return itemStore
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findItems = async (req, res)=>{
    try{
        const { storeId: id } = req.params
        const itemStore = await storeService.findItems(id)
        return itemStore
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createStore,
    findByCompany,
    findByUser,
    updateStore,
    deleteStore,
    findItems,
    findUsers,
    addItem,
    addUser,
    deleteItem,
    deleteUser
}
