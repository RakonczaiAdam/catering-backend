const categoryService = require('../services/categoryService')
const {FieldConflictError } = require("../helpers/error")
const { v4: uuid4 } = require('uuid');

const createCategory = async (req, res) => {
    try{
        const category = await categoryService.create({
            id: uuid4(),
            ...req.body
        });
        return res.json(category);
    }catch(error){
        if(error.name === "SequelizeUniqueConstraintError"){
            return res.status(500).json({error: new FieldConflictError("Company", "name")})
        }
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findByParent = async (req, res) => {
    try{
        const category = await categoryService.findByParent(req.params.categoryId, req.user.company);
        return res.json(category);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const rename = async (req, res) => {
    try{
        const { categoryId } = req.params;
        const category = await categoryService.update({ id: categoryId, ...req.body});
        return res.json(category);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const changeParent = async (req, res) => {
    try{
        const { categoryId } = req.params;
        const category = await categoryService.update({ id: categoryId, ...req.body});
        return res.json(category);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const deleteCategory = async (req, res) => {
    try{
        const { categoryId } = req.params;
        const category = await categoryService.remove(categoryId);
        return res.json(category);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createCategory,
    findByParent,
    rename,
    changeParent,
    deleteCategory
}