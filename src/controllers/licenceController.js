const { Licences } = require('../models')

exports.findAllLicence = async (req, res) => {
    try{
        const licences = await Licences.findAll();
        return res.json(licences)
    }catch(error){
        console.error("Error at api/licences/ , "+error)
        return res.status(500).json({error: "Error at api/licences/"})
    }
}

exports.findLicenceById = async ({ params }, res) => {
    try{
        const { licenceId: id } = params
        const licence = await Licences.findOne({
            where: {
                id: id
            }
        })
        if(licence == null){
            return res.status(400).json({error: "No licence with id "+ id})
        }else{
            return res.json(licence)
        }
    }catch(error){
        console.error("Error at api/licences/:licenceId , "+error)
        return res.status(500).json({error: "Error at api/licences/:licenceId"})
    }
}

exports.createLicence = async (req, res) => {
    try{
        const licence = await Licences.create(req.body)
        return res.json(licence)
    }catch(error){
        console.error("Error at api/licences/create , "+error)
        return res.status(500).json({error: "Error at api/licences/create"})
    }
}

exports.deleteLicence = async ({ params }, res) => {
    try{
        const { licenceId: id } = params
        const deletedLicence = await Licences.destroy({
            where: {
                id : id
            }
        })
        return res.json(deletedLicence)
    }catch(error){
        console.error("Error at api/licences/delete/:licenceId , "+error)
        return res.status(500).json({error: "Error at api/licences/delete/:licenceId"})
    }
}

exports.updateLicence = async ({ params, body }, res) => {
    try{
        const {licenceId: id} = params
        const licence = await Licences.findOne({
            where: {
                id: id
            }
        })
        if(licence == null){
            return res.status(400).json({error: "No licence with id "+ id})
        }
        licence.licenceName = body.licenceName
        licence.userLimit = body.userLimit
        licence.period = body.period
        licence.price = body.price
        licence.currency = body.currency
        
        const updatedLicence = await licence.save()
        return res.json(updatedLicence)
    }catch(error){
        console.error("Error at api/licences/update/:licenceId , "+error)
        return res.status(500).json({error: "Error at api/licences/update/:licenceId"})
    }
}