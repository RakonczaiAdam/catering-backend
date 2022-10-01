const { Vats } = require('../models')

const create = async (vatData)=>{
    const vat = await Vats.create(vatData)
    return vat
}

const findById = async (vatId)=>{
    const vat = await Vats.findOne({
        where: {
            id: vatId
        }
    })
    return vat
}

const findAllByCompany = async (companyId)=>{
    const vats = await Vats.findAll({
        where: {
            company: companyId
        }
    })
    return vats
}

const update = async (vatData)=>{
    const { id, vatName, collectornumber, value, company } = vatData
    const vat = await findById(id)
    const updatedVat = await vat.update({
        vatName,
        collectornumber,
        value,
        company
    })
    return updatedVat
}

const remove = async (vatId)=>{
    const deletedVat = await Vats.destroy({
        where: {
            id: vatId
        }
    })
    return deletedVat
}

module.exports = { 
    create, 
    findById, 
    findAllByCompany,
    update, 
    remove 
}