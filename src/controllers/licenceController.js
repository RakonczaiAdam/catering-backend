const licenceService = require('../services/licenceService')

const findAllLicence = async (req, res) => {
    try{
        const licences = await licenceService.findAll()
        return res.json(licences)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findLicenceById = async ({ params }, res) => {
    try{
        const { licenceId: id } = params
        const licence = await licenceService.findById(id)
        return res.json(licence)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const createLicence = async (req, res) => {
    try{
        const licence = await licenceService.create(req.body)
        return res.json(licence)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteLicence = async ({ params }, res) => {
    try{
        const { licenceId: id } = params
        const deletedLicence = await licenceService.remove(id)
        return res.json(deletedLicence)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const updateLicence = async ({ params, body }, res) => {
    try{
        const {licenceId: id} = params
        const updatedLicence = await licenceService.update({id, ...body})
        return res.json(updatedLicence)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    findAllLicence,
    findLicenceById,
    createLicence,
    deleteLicence,
    updateLicence
}