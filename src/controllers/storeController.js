const res = require('express/lib/response');
const { Stores } = require('../models')

exports.createStore = async ({body}, res)=>{
    try{
        const {storeName, company, country, region, city, address} = body;
        const store = await Stores.create({
            storeName: storeName,
            company: company,
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

exports.findByCompanyId = async ({params}, res)=>{
    try{
        const { companyId: company } = params;
        const stores = await Stores.findAll({
            where : {
                company: company
            }
        });
        return res.json(stores)
    }catch(error){
        console.error("request failed at api/stores/companyId , "+error)
        return res.status(500).json({error: "Error during fetching stores by company."})
    }
}

exports.findByStoreId = async ({params}, res)=>{
    try{
        const { storeId: store } = params;
        const returnedStore = await Stores.findAll({
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
