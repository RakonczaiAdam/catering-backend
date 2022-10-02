const roomService = require('../services/roomService')
const { v4: uuid4 } = require('uuid');

const createRoom = async (req, res)=>{
    try{
        const room = await roomService.create({
            id: uuid4(),
            roomName: req.body.roomName,
            store: req.body.store
        })
        return res.json(room)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findByStore = async (req, res)=>{
    try{
        const { storeId: store } = req.params
        const rooms = await roomService.findByStore(store)
        return res.json(rooms)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const updateRoom = async (req, res)=>{
    try{
        const { roomId: id } = req.params
        const room = await roomService.update( id, ...req.body)
        return res.json(room)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteRoom = async (req, res)=>{
    try{
        const { roomId: id } = req.params
        const deletedRow = await roomService.remove(id)
        return res.json(deletedRow)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createRoom,
    findByStore,
    updateRoom,
    deleteRoom
}