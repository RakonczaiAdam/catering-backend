const { Items } = require('../models')

const createItem = async (itemData)=>{
    const item = await Items.create(itemData).then().catch((error)=>console.error(error))
    return item
}
module.exports = {createItem}