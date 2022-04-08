const bcrypt = require('bcrypt');
const { Users } = require('../models')

const registerUser = async (userData) =>{
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword
    const user = await Users.create(userData)
    return user
}

module.exports = { registerUser }