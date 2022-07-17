const userService = require('../services/userService')
const locationService = require('../services/locationService')
const companyService = require('../services/companyService')

const registerCompany = async ({body}, res) => {
    try{
        const {companyName, password, country, region, city, address, taxNumber, email, phoneNumber} = body;
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
            return res.status(500).json({error: "UNIQUE_FIELD_CONFLICT"})
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

const findCompanyByUser = async ({user}, res) =>{
    try{
        const company = await companyService.findById(user.company)
        return res.json(company);
    }catch(error){
        console.error(error.message);
        return res.status(500).json({error: error.message})
    }
}

const updateCompanyById = async (req, res)=>{
    try{
        if(!req.user.isAdmin){
            return res.status(400).json({error: "Only admin user can modify data."})
        }
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
        if(!req.user.isAdmin){
            return res.status(400).json({error: "Only admin user can modify data."})
        }
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
        if(!req.user.isAdmin){
            return res.status(400).json({error: "Only admin user can add licence"})
        }
        const companyLicence = await companyService.createLicence(req.user.company, req.params.licenceId)
        return res.jsno(companyLicence)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    registerCompany,
    findAllCompany,
    findCompanyByUser,
    updateCompanyById,
    removeCompany,
    addLicence
}