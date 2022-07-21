const { Companies, CompanyLicences, Licences } = require('../models')

const create = async (companyData)=>{
    const company = await Companies.create(companyData).then().catch((error)=>console.error(error))
    return company
}

const findById = async (companyId)=>{
    const company = await Companies.findOne({
        where: {
            id: companyId
        }
    })
    return company
}

const findAll = async ()=>{
    const companies = await Companies.findAll();
    return companies
}

const remove = async (companyId)=>{
    const removedCompany = await Companies.destroy({
        where: {
            id: companyId
        }
    })
    return removedCompany
}

const update = async (companyData)=>{
    const { companyName, location, taxNumber, email, phone } = companyData
    const company = await findById(companyData.id)
    const updatedCompany = await company.update({
        companyName,
        location,
        taxNumber,
        email,
        phone
    })
    return updatedCompany
}

const createLicence = async (companyId, licenceId)=>{
    const companyLicence = await CompanyLicences.create({
        company: companyId,
        licence: licenceId,
        active: true
    })
    return companyLicence
}

const findLicence = async (companyId)=>{
    const companyLicence = await CompanyLicences.findOne({
        where: {
            company: companyId,
            active: true
        },
        include: [
            {
                model: Licences
            }
        ]
    })
    return companyLicence
}

const deactivateLicence = async (companyId)=>{
    const companyLicence = await findLicence(companyId)
    const deactivatedLicence = await companyLicence.update({
        actice: false
    })
    return deactivatedLicence
}

module.exports = {
    create, 
    findById, 
    findAll,
    remove, 
    update, 
    createLicence, 
    findLicence, 
    deactivateLicence
}