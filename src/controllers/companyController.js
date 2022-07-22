const userService = require('../services/userService')
const locationService = require('../services/locationService')
const companyService = require('../services/companyService');
const { NameAlreadyExistError } = require('../helpers/error');

const registerCompany = async (req, res) => {
    try{
        const {companyName, password, country, region, city, address, taxNumber, email, phoneNumber} = req.body;
        const location = await locationService.create({
            country, 
            region, 
            city, 
            address
        })
        const company = await companyService.create({
            companyName,
            location: location.id,
            taxNumber,
            email,
            phoneNumber
        })
        const user = await userService.registerUser({
            company: company.id,
            userName: companyName,
            password,
            isAdmin: true
        })
        return res.json({company: company, user: user})
    }catch(error){
        if(error.name === "SequelizeUniqueConstraintError"){
            return res.status(500).json({error: new NameAlreadyExistError()})
        }
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findAllCompany = async (req, res) => {
    try{
        const companies = await companyService.findAll();
        return res.json(companies)
    }catch(error){
        console.error(error.message);
        return res.status(500).json({error: error.message})
    }
}

const findCompanyByUser = async (req, res) =>{
    try{
        const company = await companyService.findById(req.user.company)
        return res.json(company);
    }catch(error){
        console.error(error.message);
        return res.status(500).json({error: error.message})
    }
}

const updateCompany = async (req, res)=>{
    try{
        const { companyId: id } = req.params
        const company = await companyService.update({id, ...req.body})
        return res.json(company)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const removeCompany = async (req, res)=>{
    try{
        const { companyId: id } = req.params
        const company = companyService.remove(id)
        return res.json(company)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const addLicence = async (req, res)=>{
    try{
        const companyLicence = await companyService.createLicence(req.user.company, req.params.licenceId)
        return res.jsno(companyLicence)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findLicenceByCompany = async (req, res)=>{
    try{
        const licence = await companyService.findLicence(req.user.company)
        return res.json(licence)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deactivateLicence = async (req, res)=>{
    try{
        const licence = await companyService.deactivateLicence(req.user.company)
        return res.json(licence)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    registerCompany,
    findAllCompany,
    findCompanyByUser,
    updateCompany,
    removeCompany,
    addLicence,
    findLicenceByCompany,
    deactivateLicence
}