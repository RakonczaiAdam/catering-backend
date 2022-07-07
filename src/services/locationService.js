const { Locations } = require('../models')

const createLocation = async (locationData)=>{
    const location = await Locations.create(locationData).then().catch((error)=>console.error(error.message))
    console.log("LOCATION: ")
    console.log(location)
    return location
}
module.exports = {createLocation}