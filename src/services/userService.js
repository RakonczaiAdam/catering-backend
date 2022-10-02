const bcrypt = require('bcrypt');
const { Users, RefreshTokens } = require('../models');
const jwt = require('jsonwebtoken');
const { v4: uuid4 } = require('uuid');

const registerUser = async (userData) =>{
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword
    const user = await Users.create(userData)
    return user
}

const createAccessToken = async (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10m'})
} 

const createRefreshToken = async (refreshToken)=>{
    const dbToken = await RefreshTokens.create({
        id: uuid4(),
        token: refreshToken,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    return dbToken
}

const findRefreshToken = async (refreshToken)=>{
    const dbToken = await RefreshTokens.findOne({
        where: {
            token: refreshToken
        }
    })
    return dbToken
}

const removeRefreshToken = async (refreshToken)=>{
    const deletedToken = await RefreshTokens.destroy({
        where : {
            token: refreshToken
        }
    })
    return deletedToken
}

const findAdmins = async (companyId)=>{
    const admins = await Users.findAll({
        where: {
            company: companyId,
            isAdmin: true
        }
    })
    return admins
}

const findByName = async (companyId, userName)=>{
    const user = await Users.findOne({
        where : {
            company: companyId,
            userName: userName
        }
    })
    return user
}

const findById = async (userId)=>{
    const user = await Users.findOne({
        where : {
            id: userId
        }
    })
    return user
}

const findAllByCompany = async (companyId)=>{
    const users = await Users.findAll({
        where:{
            company: companyId
        },
        order: [
            ['createdAt', 'DESC']
        ]
    })
    return users
}

const remove = async (userId)=>{
    const deletedUser = await Users.destroy({
        where: {
            id: userId
        }
    })
    return deletedUser
}

module.exports = { 
    registerUser, 
    createAccessToken, 
    findRefreshToken, 
    createRefreshToken, 
    removeRefreshToken, 
    findByName,
    findById,
    findAllByCompany,
    findAdmins,
    remove
}