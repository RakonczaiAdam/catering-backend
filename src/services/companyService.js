const { Companies, CompanyLicences } = require('../models')

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
        companyName: companyName,
        location: location,
        taxNumber: taxNumber,
        email: email,
        phone: phone
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
        }
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

module.exports = {create, findById, remove, update, createLicence, findLicence, deactivateLicence}