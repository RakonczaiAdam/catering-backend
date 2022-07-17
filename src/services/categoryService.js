const { Categories } = require('../models')

const create = async (categoryData)=>{
    const category = await Categories.create(categoryData)
    return category
}

const findRoot = async ()=>{
    const categories = await Categories.findAll({
        where: {
            parent: null
        }
    })
    return categories
}

const findByParent = async (parentId)=>{
    const categories = await Categories.findAll({
        where: {
            parent: parentId
        }
    })
    return categories
}

const findById = async (categoryId)=>{
    const category = await Categories.findOne({
        where: {
            id: categoryId
        }
    })
    return category
}

const remove = async (categoryId)=>{
    const deletedCategory = await Categories.destroy({
        where: {
            id: categoryId
        }
    })
    return deletedCategory
}

const update = async (categoryData)=>{
    const { id, categoryName, color, parent, store } = categoryData
    const category = await findById(id)
    const updatedCategory = await category.update({
        categoryName,
        color,
        parent,
        store
    })
    return updatedCategory
}

module.exports = {
    create,
    findById,
    findByParent,
    findRoot,
    remove,
    update
}