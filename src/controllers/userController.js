const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users, RefreshToken, Stores, UserStores } = require('../models')
const { registerUser, generateAccessToken } = require('../services/userService')
const userService = require('../services/userService')
const storeService = require('../services/storeService')

const getToken = async (req, res) => {
    try{
        const refreshToken = req.body.token
        if(refreshToken == null){
            return res.status(401).json({error: "Missing argument: token (refreshToken))."})
        }
        const dbToken = await userService.findRefreshToken(refreshToken)
        if(dbToken == null){
            return res.status(403).json({error: "No such token in the database."})
        }
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user)=>{
            if(error){
                return res.status(403).json({error: "Wrong token."})
            }
            const accessToken = userService.createAccessToken({
                id: user.id, 
                company: user.company,
                userName: user.userName,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })
            return res.json({accessToken: accessToken})
        })
    }catch(error){
        console.error(error)
    }
}

const loginUser = async ({body}, res) => {
    try{
        // Authenticate User
        const { companyId, userName, password} = body;
        const user = await userService.findByName(companyId, userName)
        if(user == null){
            return res.status(400).json({error: "No such user found"})
        }
        if (await bcrypt.compare(password, user.password)){
            // Authorization User with JWT
            const accessToken = userService.createAccessToken({
                id: user.id, 
                company: user.company,
                userName: user.userName,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })
            const refreshToken = jwt.sign({
                id: user.id, 
                company: user.company,
                userName: user.userName,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }, process.env.REFRESH_TOKEN_SECRET)
            const dbToken = await userService.createRefreshToken(refreshToken)
            return res.json({accessToken: accessToken, refreshToken: dbToken.token})
        }else{
            return res.status(400).json({error: "Wrong password"})
        }
    }catch(error){
        console.error('Login failed, api/users/login , '+error)
        return res.status(500).json({error: "Login failed."})
    }
}

const logoutUser = async (req, res) =>{
    try{
        const refreshToken = req.body.token
        const deletedToken = await userService.removeRefreshToken(refreshToken)
        return res.json({deletedTokens: deletedToken} )
    }catch(error){
        console.error("Logout failed api/users/logout , "+error)
        return res.status(500).json({error: "Logout failed."})
    }
}
 
const registerUser = async (req, res) =>{
    try{
        if(req.user == null){
            return res.status(403).json({})
        }
        // Ha létezik ilyen user akkor nem regisztrálunk új user-t
        if(await userService.findByName(req.user.company, req.body.userName)){
            return res.status(403).json({error: "username already used"})
        }
        const registeredUser = await userService.registerUser({
            company: req.user.company,
            userName: req.body.userName,
            password: req.body.password,
            isAdmin: req.body.isAdmin,
        })
        if(registeredUser.isAdmin){
            const stores = await storeService.findAllByCompany(req.user.company)
            stores.map(async store =>{
                await storeService.addUser({
                    user: registeredUser.id,
                    store: store.id
                })
            })
        }
        return res.json(registeredUser)
    }catch(error){
        console.error("request failed: api/users/registration, "+ error)
        return res.status(500).json({error: "Registration failed."})
    }
}

const findUser = async (req, res) =>{
    try{
        const user = await userService.findById(req.user.id)
        return res.json(user)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: "inside findUser"})
    }
}

const findUsersByCompany = async ({user}, res) =>{
    try{
        const insertedUser = await userService.findAllByCompany(user.company)
        return res.json(insertedUser)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: "inside findUser"})
    }
}

const deleteUser = async (req, res)=>{
    try{
        const {userId: id} = req.params
        const deletedRows = await userService.remove(id)
        return res.json(deletedRows)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: "user delete error"})
    }
}

module.exports = {
    getToken,
    loginUser,
    logoutUser,
    registerUser,
    findUser,
    findUsersByCompany,
    deleteUser
}