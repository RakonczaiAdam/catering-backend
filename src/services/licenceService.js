const { Licences } = require('../models')

const create = async (licenceData)=>{
    const licence = await Licences.create(licenceData)
    return licence
}

const findAll = async ()=>{
    const licences = await Licences.findAll()
    return licences
}

const findById = async (licenceId)=>{
    const licence = await Licences.findOne({
        where: {
            id: licenceId
        }
    })
    return licence
}

const update = async (licenceData)=>{
    const { id, licenceName, userLimit, period, price, currency} = licenceData
    const licence = await findById(id)
    const updatedLicence = await licence.update({
        licenceName, 
        userLimit, 
        period, 
        price, 
        currency
    })
    return updatedLicence
}

const remove = async (licenceId)=>{
    const deletedLicence = await Licences.destroy({
        where: {
            id: licenceId
        }
    })
    return deletedLicence
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
}