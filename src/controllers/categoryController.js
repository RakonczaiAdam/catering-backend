const categoryService = require('../services/categoryService')
const {FieldConflictError } = require("../helpers/error")

const createCategory = async (req, res) => {
    try{
        
    }catch(error){
        if(error.name === "SequelizeUniqueConstraintError"){
            return res.status(500).json({error: new FieldConflictError("Company", "name")})
        }
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findByParent = async (req, res) => {

}

const rename = async (req, res) => {

}

const changeParent = async (req, res) => {

}

const deleteCategory = async (req, res) => {

}

module.exports = {
    createCategory,
    findByParent,
    rename,
    changeParent,
    deleteCategory
}