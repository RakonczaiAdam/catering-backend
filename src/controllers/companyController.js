const { Companies } = require('../models')
const {registerUser} = require('../services/userService')
const {createLocation} = require('../services/locationService')

exports.registerCompany = async ({body}, res) => {
    try{
        const {companyName, password, country, region, city, address, taxNumber, email, phoneNumber} = body;
        const location = await createLocation({country, region, city, address})
        const company = await Companies.create({
            companyName : companyName,
            location: location.id,
            taxNumber: taxNumber,
            email: email,
            phoneNumber: phoneNumber
        })
        const user = await registerUser({
            company: company.id,
            userName: companyName,
            password: password,
            isAdmin: true
        })
        return res.json({company: company, user: user})
    }catch(error){
        if(error.name === "SequelizeUniqueConstraintError"){
            return res.status(500).json({error: "UNIQUE_FIELD_CONFLICT"})
        }
        console.error("request failed at api/companies/registration , "+error)
        return res.status(500).json({error: "Error during company registration."})
    }
}

exports.findAllCompany = async (req, res) => {
    try{
        const companies = await Companies.findAll();
        return res.json(companies)
    }catch(error){
        console.error("request failed at api/companies , "+error);
        return res.status(500).json({error: "Error during fetching companies."})
    }
}

exports.findCompanyByUser = async ({user}, res) =>{
    try{
        const company = await Companies.findOne({
            where :{
                id : user.company
            }
        })
        return res.json(company);
    }catch(error){
        console.error("request failed at api/companies/companyName , "+error);
        return res.status(500).json({error: "Error during get company by name."})
    }
}
