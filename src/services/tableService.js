const { Tables, Reservations } = require('../models')

const create = async (tableData)=>{
    const table = await Tables.create(tableData)
    return table
}

const findByRoom = async (roomId)=>{
    const tables = await Tables.findAll({
        where: {
            room: roomId
        }
    })
    return tables
}

const findById = async (tableId)=>{
    const table = await Tables.findOne({
        where: {
            id: tableId
        }
    })
    return table
}

const remove = async (tableId)=>{
    const deletedTable = await Tables.destroy({
        where: {
            id: tableId
        }
    })
    return deletedTable
}

const update = async (tableData)=>{
    const { id, tableName, room, placeX, placeY, state } = tableData
    const table = await findById(id)
    const updatedTable = await table.update({
        tableName,
        room,
        placeX,
        placeY
    })
    return updatedTable
}

const modifyState = async (tableId, state)=>{
    const table = await findById(tableId)
    const updatedTable = await table.update({
        state
    })
    return updatedTable
}

const addReservation = async (reservationData)=>{
    const reservation = await Reservations.create(reservationData)
    return reservation
}

const findReservations = async (tableId)=>{
    const reservations = await Reservations.findAll({
        where: {
            table: tableId
        }
    })
    return reservations
}

const removeReservation = async (reservationId)=>{
    const deletedReservation = await Reservations.destroy({
        where: {
            id: reservationId
        }
    })
    return deletedReservation
}

module.exports = {
    create,
    findById,
    findByRoom,
    remove,
    update,
    modifyState,
    addReservation,
    findReservations,
    removeReservation
}