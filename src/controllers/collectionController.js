const collectionService = require('../services/collectionService');

const createCollection = async (req, res) => {
    try{
        const collection = await collectionService.create(req.body);
        return res.json(collection);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findByStore = async (req, res) => {
    try{
        const collections = await collectionService.findByStore(req.params.storeId);
        return res.json(collections);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findById = async (req, res) => {
    try{
        const collections = await collectionService.findByStore(req.params.collectionId);
        return res.json(collections);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const renameCollection = async (req, res) => {
    try{
        const { collectionId } = req.params;
        const collection = await collectionService.update({id: collectionId, ...req.body});
        return res.json(collection); 
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteCollection = async (req, res) => {
    try{
        const { collectionId } = req.params;
        const deletedRow = await collectionService.remove(collectionId);
        return res.json(deletedRow);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const addDiscount = async (req, res) => {
    try{
        const collectionDiscount = await collectionService.addDiscount(req.body);
        return res.json(collectionDiscount);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const removeDiscount = async (req, res) => {
    try{
        const deleted = await collectionService.removeDiscount(req.params.collectionDiscountId);
        return res.json(deleted);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findDiscounts = async (req, res) => {
    try{
        const discounts = await collectionService.findDiscounts(req.params.collectionId);
        return res.json(discounts);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createCollection,
    findByStore,
    findById,
    renameCollection,
    deleteCollection,
    addDiscount,
    removeDiscount,
    findDiscounts
}