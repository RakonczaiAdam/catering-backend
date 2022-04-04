const { Companies } = require('../models')

exports.registerCompany = async ({body}, res) => {
    try{
        const {companyName, password, country, region, city, address, taxNumber, email} = body;
        const company = await Companies.create({
            companyName : companyName,
            password : password,
            country: country,
            region : region,
            city: city,
            address : address,
            taxNumber: taxNumber,
            email: email,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        return res.json(company)
    }catch(error){
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

exports.findCompanyByName = async ({params}, res) =>{
    try{
        const { companyName : name } = params;
        const company = await Companies.findAll({
            where :{
                companyName : name
            }
        })
        return res.json(company);
    }catch(error){
        console.error("request failed at api/companies/companyName , "+error);
        return res.status(500).json({error: "Error during get company by name."})
    }
}