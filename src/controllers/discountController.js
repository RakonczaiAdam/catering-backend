const discountService = require('../services/discountService');
const { v4: uuid4 } = require('uuid');

const createDiscount = async (req, res) => {
    try{
        const discount = await discountService.create({
            id: uuid4(),
            ...req.boby
        })
        return res.json(discount);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteDiscount = async (req, res) => {
    try{
        const deleted = await discountService.remove(req.params.discountId);
        return res.json(deleted);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const updateDiscount = async (req, res) => {
    try{
        const discount = await discountService.update({
            id: req.params.discountId,
            ...req.body
        })
        return res.json(discount);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findByStore = async (req, res) => {
    try{
        const discounts = await discountService.findByStore(req.params.storeId);
        return res.json(discounts);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createDiscount,
    updateDiscount,
    deleteDiscount,
    findByStore
}