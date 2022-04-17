const res = require('express/lib/response');
const { Stores } = require('../models')

exports.createStore = async (req, res)=>{
    try{
        const {storeName, country, region, city, address} = req.body;
        const store = await Stores.create({
            storeName: storeName,
            company: req.user.company,
            country: country,
            region: region,
            city: city,
            address: address,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        return res.json(store)
    }catch(error){
        console.error("request failed at api/stores/create , "+error);
        return res.status(500).json({error: "Error during creating store."})
    }
}

exports.findAllStore = async (req, res)=>{
    try{
        const stores = await Stores.findAll();
        return res.json(stores)
    }catch(error){
        console.error("request failed at api/stores/ , "+error)
        return res.status(500).json({error: "Error during fetching stores."})
    }
}

exports.findByCompanyId = async ({user}, res)=>{
    try{
        const stores = await Stores.findAll({
            where : {
                company: user.company
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });
        return res.json(stores)
    }catch(error){
        console.error("request failed at api/stores/company , "+error)
        return res.status(500).json({error: "Error during fetching stores by company."})
    }
}

exports.findByStoreId = async ({params}, res)=>{
    try{
        const { storeId: store } = params;
        const returnedStore = await Stores.findOne({
            where : {
                id: store
            }
        });
        return res.json(returnedStore)
    }catch(error){
        console.error("request failed at api/stores/storeId , "+error)
        return res.status(500).json({error: "Error during getting stores by id."})
    }
}

exports.deleteStore = async({params}, res)=>{
    try{
        const deletedRows = await Stores.destroy({
            where: {
                id: params.storeId
            }
        })
        return res.json(deletedRows)
    }catch(error){
        console.error("request failed at api/stores/delete/id , "+error)
        return res.status(500).json({error: "Error during delete stores by id."})
    }
}
