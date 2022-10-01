const { Locations } = require('../models')

const create = async (locationData)=>{
    const location = await Locations.create(locationData).then().catch((error)=>console.error(error.message))
    return location
}

const findById = async (locationId)=>{
    const location = await Locations.findOne({
        where: {
            id: locationId
        }
    })
    return location
}

const remove = async (locationId)=>{
    const deletedLocation = await Locations.destroy({
        where: {
            id: locationId
        }
    })
    return deletedLocation
}

const update = async (locationData)=>{
    const { id, country, region, city, address } = locationData
    const location = await findById(id)
    const updatedLocation = await location.update({
        country,
        region,
        city,
        address
    })
    return updatedLocation
}

module.exports = {
    create, 
    findById, 
    remove, 
    update
}