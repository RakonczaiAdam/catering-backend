const companyService = require('../services/companyService')

exports.createCompanyLicence = async (req, res) => {
    try{
        if(!req.user.isAdmin){
            return res.status(403).json({error: "Only the root user permitted"})
        }
        const companyLicence = await companyService.createLicence(req.body.id, req.user.company)
        return res.json(companyLicence)
    }catch(error){
        console.error("Error at api/companyLicences/create , "+ error)
        return res.status(500).json({error: error})
    }
}

exports.findLicenceByCompany = async (req, res) => {
    try{
        const companyLicence = await companyService.findLicence(req.user.company)
        return res.json(companyLicence)
    }catch(error){
        console.error("Error at api/companyLicences/licence , "+ error)
        return res.status(500).json({error: error})
    }
}

exports.updateLicenceByCompany = async (req, res) => {
    try{
        const updatedCompanyLicence = await companyService.deactivateLicence(req.user.company)
        return res.json(updatedCompanyLicence)
    }catch(error){
        console.error("Error at api/companyLicences/update , "+ error)
        return res.status(500).json({error: error})
    }
}