const { Rooms } = require('../models')

const create = async (roomData)=>{
    const room = await Rooms.create(roomData)
    return room
}

const findByStore = async (storeId)=>{
    const rooms = await Rooms.findAll({
        where: {
            store: storeId
        }
    })
    return rooms
}

const findById = async (roomId)=>{
    const room = await Rooms.findOne({
        where: {
            id: roomId
        }
    })
    return room
}

const remove = async (roomId)=>{
    const deletedRoom = await Rooms.destroy({
        where: {
            id: roomId
        }
    })
    return deletedRoom
}

const update = async (roomData)=>{
    const { id, roomName, store } = roomData
    const room = await findById(id)
    const updatedRoom = await room.update({
        roomName,
        store
    })
    return updatedRoom
}

module.exports = {
    create,
    findByStore,
    findById,
    remove,
    update
}