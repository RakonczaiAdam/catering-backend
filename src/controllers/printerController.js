const printerService = require('../services/printerService')

const createPrinter = async (req, res)=>{
    try{
        const printer = await printerService.create({
            printerName: req.body.printerName,
            share: req.body.share,
            isOn: req.body.isOn,
            store: req.body.store
        })
        return res.json(printer)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findByStore = async (req, res)=>{
    try{
        const { storeId: id } = req.params
        const printers = await printerService.findAllByStore(id)
        return res.json(printers)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const updatePrinter = async (req, res)=>{
    try{
        const { printerId: id } = req.params
        const printer = await printerService.update({id, ...req.body})
        return res.json(printer)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deletePrinter = async (req, res)=>{
    try{
        const { printerId: id} = req.params
        const deletedRow = await printerService.remove(id)
        return req.json(deletedRow)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const addRoom = async (req, res)=>{
    try{
        const roomPrinter = await printerService.addRoom({
            room: req.body.room,
            printer: req.body.printer,
            reservation: req.body.reservation
        })
        return res.json(roomPrinter)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findByRoom = async (req, res)=>{
    try{
        const { roomId: id } = req.params
        const printers = await printerService.findByRoom(id)
        return res.json(printers)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteRoom = async (req, res)=>{
    try{
        const { roomPrinterId: id } = req.params
        const deletedRow = await printerService.removeRoom(id)
        return res.json(deletedRow)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const addItem = async (req, res)=>{
    try{
        const itemPrinter = await printerService.addItem({
            item: req.body.item,
            printer: req.body.printer
        })
        return res.json(itemPrinter)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findByItem = async (req, res)=>{
    try{
        const { itemId: id } = req.params
        const printers = await printerService.findByItem(id)
        return res.json(printers)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteItem = async (req, res)=>{
    try{
        const { itemPrinterId: id } = req.params
        const deletedRow = await printerService.removeItem(id)
        return res.json(deletedRow)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createPrinter,
    findByStore,
    updatePrinter,
    deletePrinter,
    addRoom,
    findByRoom,
    deleteRoom,
    addItem,
    findByItem,
    deleteItem
}