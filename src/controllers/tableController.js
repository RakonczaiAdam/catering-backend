const tableService = require('../services/tableService')
const { v4: uuid4 } = require('uuid');

const createTable = async (req, res)=>{
    try{
        const table = await tableService.create({
            id: uuid4(),
            tableName: req.body.tableName,
            room: req.body.room,
            placeX: req.body.placeX,
            placeY: req.body.placeY,
            state: false
        })
        return res.json(table)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const findByRoom = async (req, res)=>{
    try{
        const { roomId: room } = req.params
        const tables = await tableService.findByRoom(room)
        return res.json(tables)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const updateTable = async (req, res)=>{
    try{
        const { tableId: id } = req.params
        const table = await tableService.update(id, ...req.body)
        return res.json(table)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const updateState = async (req, res)=>{
    try{
        const { tableId: id } = req.params
        const table = await tableService.modifyState(id, req.body.state)
        return res.json(table)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const deleteTable = async (req, res)=>{
    try{
        const { tableId: id } = req.params
        const deletedRow = await tableService.remove(id)
        return res.json(deletedRow)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const addReservation = async (req, res)=>{
    try{
        const { tableId: table } = req.params
        const reservation = await tableService.addReservation({
            table,
            start: req.body.start,
            customerName: req.body.customerName
        })
        return res.json(reservation)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const deleteReservation = async (req, res)=>{
    try{
        const { reservationId: id } = req.params
        const deletedRow = await tableService.removeReservation(id)
        return res.json(deletedRow)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

const findReservations = async (req, res)=>{
    try{
        const { tableId: table} = req.params
        const reservations = await tableService.findReservations(table)
        return res.json(reservations)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createTable,
    findByRoom,
    updateTable,
    updateState,
    deleteTable,
    addReservation,
    deleteReservation,
    findReservations
}