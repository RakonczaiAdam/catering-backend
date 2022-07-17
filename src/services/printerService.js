const { Printers, Rooms, Items, RoomPrinters, ItemPrinters } = require('../models')

const create = async (printerData)=>{
    const printer = await Printers.create(printerData)
    return printer
}

const findAllByStore = async (storeId)=>{
    const printers = await Printers.findAll({
        where: {
            store: storeId
        }
    })
    return printers
}

const findById = async (printerId)=>{
    const printer = await Printers.findOne({
        where: {
            id: printerId
        }
    })
    return printer
}

const remove = async (printerId)=>{
    const deletedPrinter = await Printers.destroy({
        where: {
            id: printerId
        }
    })
    return deletedPrinter
}

const update = async (printerData)=>{
    const { id, printerName, share, isOn, store } = printerData
    const printer = await findById(id)
    const updatedPrinter = await printer.update({
        printerName,
        share,
        isOn,
        store
    })
    return updatedPrinter
}

const addRoom = async (roomPrinterData)=>{
    const roomPrinter = await RoomPrinters.create(roomPrinterData)
    return roomPrinter
}

const removeRoom = async (roomPrinterId)=>{
    const deletedRoomPrinter = await RoomPrinters.destroy({
        where: {
            id: roomPrinterId
        }
    })
    return deletedRoomPrinter
}

const findRoomPrinter = async (printerId)=>{
    const roomPrinters = await RoomPrinters.findAll({
        where: {
            printer: printerId
        },
        include: [
            {
                model: Rooms
            },
            {
                model: Printers
            }
        ]  
    })
    return roomPrinters
}

const addItem = async (itemPrinterData)=>{
    const itemPrinter = await ItemPrinters.create(itemPrinterData)
    return itemPrinter
}

const removeItem = async (itemPrinterId)=>{
    const deletedItemPrinter = await ItemPrinters.destroy({
        where: {
            id: itemPrinterId
        }
    })
    return deletedItemPrinter
}

const findItemPrinter = async (printerId)=>{
    const itemPrinters = await RoomPrinters.findAll({
        where: {
            printer: printerId
        },
        include: [
            {
                model: Items
            },
            {
                model: Printers
            }
        ]  
    })
    return itemPrinters
}

module.exports = { 
    create, 
    findAllByStore, 
    findById, 
    remove, 
    update,
    addRoom,
    removeRoom,
    findRoomPrinter,
    addItem,
    removeItem,
    findItemPrinter
}