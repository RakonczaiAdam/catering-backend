const { user } = require('pg/lib/defaults')
const { CompanyLicences, Companies } = require('../models') 

exports.createCompanyLicence = async (req, res) => {
    try{
        const company = await Companies.findOne({
            where: {
                id: req.user.company
            }
        })
        if(!req.user.isAdmin){
            return res.status(403).json({error: "Only the root user permitted"})
        }
        const companyLicence = await CompanyLicences.create({
            licence: req.body.id,
            company: company.id,
            active: true
        })
        return res.json(companyLicence)
    }catch(error){
        console.error("Error at api/companyLicences/create , "+ error)
        return res.status(500).json({error: error})
    }
}

exports.findLicenceByCompany = async (req, res) => {
    try{
        const companyLicence = await CompanyLicences.findOne({
            where: {
                company: req.user.company,
                actice: true
            }
        })
        return res.json(companyLicence)
    }catch(error){
        console.error("Error at api/companyLicences/licence , "+ error)
        return res.status(500).json({error: error})
    }
}

exports.updateLicenceByCompany = async (req, res) => {
    try{
        const companyLicence = await CompanyLicences.findOne({
            where: {
                company: req.user.company,
                actice: true
            }
        })
        companyLicence.actice = false

        const updatedCompanyLicence = await companyLicence.save()
        return res.json(updatedCompanyLicence)
    }catch(error){
        console.error("Error at api/companyLicences/update , "+ error)
        return res.status(500).json({error: error})
    }
}