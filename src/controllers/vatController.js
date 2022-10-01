const vatService = require('../services/vatService')

const createVat = async (req, res) =>{
    try{
        const vat = await vatService.create({
            vatName: req.body.vatName,
            collectorNumber: req.body.collectorNumber,
            value: req.body.value,
            company: req.body.company,
        })
        return res.json(vat)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findVatByCompany = async (req, res) =>{
    try{
        const { companyId: company } = req.params
        const vats = await vatService.findAllByCompany(company)
        return res.json(vats)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const updateVat = async (req, res) =>{
    try{
        const { vatId: id } = req.params
        const vat = await vatService.update({id, ...req.body})
        return res.json(vat)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteVat = async (req, res) =>{
    try{
        const { vatId: id } = req.params
        const deletedRow = await vatService.remove(id)
        return res.json(deletedRow)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createVat,
    findVatByCompany,
    updateVat,
    deleteVat
}