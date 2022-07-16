const bcrypt = require('bcrypt');
const { Users, RefreshToken } = require('../models');
const jwt = require('jsonwebtoken');

const registerUser = async (userData) =>{
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword
    const user = await Users.create(userData)
    return user
}

const createAccessToken = async (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1m'})
} 

const createRefreshToken = async (refreshToken)=>{
    const dbToken = await RefreshToken.create({
        token: refreshToken,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    return dbToken
}

const findRefreshToken = async (refreshToken)=>{
    const dbToken = await RefreshToken.findOne({
        where: {
            token: refreshToken
        }
    })
    return dbToken
}

const removeRefreshToken = async (refreshToken)=>{
    const deletedToken = await RefreshToken.destroy({
        where : {
            token: refreshToken
        }
    })
    return deletedToken
}

const findById = async (companyId, userName)=>{
    const user = await Users.findOne({
        where : {
            company: companyId,
            userName: userName
        }
    })
    return user
}

module.exports = { registerUser, createAccessToken, findRefreshToken, createRefreshToken, removeRefreshToken, findById }