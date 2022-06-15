const { user } = require('pg/lib/defaults')
const { Op } = require('sequelize')
const { Items, Stores } = require('../models')
const { createItem } = require('../services/itemService')

exports.createItem = async (req, res)=>{
    try{
        // Ha a store üres akkor minden storeba vegye fel
        const {itemName, price, store, logicalPrinter, vat, stock, unit} = req.body
        if(store == null){
            const stores = await Stores.findAll({
                where : {
                    company : req.user.company
                }
            })
            const items = []
            stores.map(async s=>{
                const item = await createItem({
                        itemName: itemName,
                        price: price,
                        store: s.id,
                        stock: stock,
                        unit: unit
                    }
                )
                items.push(item)
            })
            return res.status(200).json(items)
        }
        const item = await createItem({
                itemName: itemName,
                price: price,
                store: store,
                stock: stock,
                unit: unit
            }
        )
        return res.json(item)
    }catch(error){
        console.log(error)
        return res.status(500)
    }
}

exports.getItemsByCompany = async (req, res)=>{
    try{
        const items = await Items.findAll({
            where: {
                '$storeId.company$': {[Op.eq]: req.user.company}
            },
            include: [{
                model: Stores,
                as : 'storeId'
            }],
            order: [
                ['createdAt', 'DESC']
            ]
        })
        return res.json(items)
    }catch(error){
        console.log(error)
        return res.status(500)
    }
}

exports.deleteItemById = async (req, res)=>{
    try{
        const {itemId: id} = req.params
        const deletedRows = await Items.destroy({
            where: {
                id: id
            }
        })
        return res.json(deletedRows)
    }catch(error){
        console.log(error)
        return res.status(500)
    }
}

exports.getItemsByStore = async (req, res)=>{

}