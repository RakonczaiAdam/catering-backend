const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users, RefreshToken, Companies } = require('../models')
const { registerUser } = require('../services/userService')

exports.getToken = async (req, res) => {
    try{
        const refreshToken = req.body.token
        if(refreshToken == null){
            return res.status(401).json({error: "Missing argument: token (refreshToken))."})
        }
        const dbToken = await RefreshToken.findOne({
            where: {
                token: refreshToken
            }
        })
        if(dbToken == null){
            return res.status(403).json({error: "No such token in the database."})
        }
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user)=>{
            if(error){
                return res.status(403).json({error: "Wrong token."})
            }
            const accessToken = generateAccessToken({
                id: user.id, 
                company: user.company,
                userName: user.userName,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })
            return res.json({accessToken: accessToken})
        })
    }catch(error){
        console.error(error)
    }
}

exports.loginUser = async ({body}, res) => {
    try{
        // Authenticate User
        const { companyId, userName, password} = body;
        // const company = await Companies.findOne({
        //     where: {
        //         companyName: companyName
        //     }
        // })
        const user = await Users.findOne({
            where : {
                company: companyId,
                userName: userName
            },
            raw: true
        })
        if(user == null){
            return res.status(400).json({error: "No such user found"})
        }
        if (await bcrypt.compare(password, user.password)){
            // Authorization User with JWT
            const accessToken = generateAccessToken({
                id: user.id, 
                company: user.company,
                userName: user.userName,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })
            const refreshToken = jwt.sign({
                id: user.id, 
                company: user.company,
                userName: user.userName,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }, process.env.REFRESH_TOKEN_SECRET)
            const dbToken = await RefreshToken.create({
                token: refreshToken,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            return res.json({accessToken: accessToken, refreshToken: dbToken.token})
        }else{
            return res.status(400).json({error: "Wrong password"})
        }
    }catch(error){
        console.error('Login failed, api/users/login , '+error)
        return res.status(500).json({error: "Login failed."})
    }
}

exports.logoutUser = async (req, res) =>{
    try{
        const refreshToken = req.body.token
        const deletedToken = await RefreshToken.destroy({
            where : {
                token: refreshToken
            }
        })
        return res.json({deletedTokens: deletedToken} )
    }catch(error){
        console.error("Logout failed api/users/logout , "+error)
        return res.status(500).json({error: "Logout failed."})
    }
}

// exports.loginUser = async ({body}, res) => {
//     try{
//         // Authenticate User
//         const { name, password} = body;
//         const user = await Users.findOne({
//             where : {
//                 name: name
//             },
//             raw: true
//         })
//         if(user == null){
//             return res.status(400).json({error: "No such user found"})
//         }
//         console.log(user)
//         if (await bcrypt.compare(password, user.password)){
//             // Authorization User with JWT
//             const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//             return res.json({accessToken: accessToken})
//         }else{
//             return res.status(400).json({error: "Wrong password"})
//         }
//     }catch(error){
//         console.error('Login failed, api/users/login , '+error)
//         return res.status(500).json({error: "Login failed."})
//     }
// }
 
exports.registerUser = async (req, res) =>{
    try{
        console.log('request call: api/users/registration')
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // req.body.password = hashedPassword;
        // const user = await Users.create(req.body)
        // return res.json(user)
        if(req.user == null){
            return res.status(403).json({})
        }
        return registerUser(req.body)
    }catch(error){
        console.error("request failed: api/users/registration, "+ error)
        return res.status(500).json({error: "Registration failed."})
    }
}

exports.findAllUser = async (req, res) =>{
    try{
        console.log('request call: api/users/')
        const users = await Users.findAll()
        return res.json(users)
    }catch(error){
        console.error("request failed: api/users/")
        return res.status(500).json({error: "Error during fetching users"})
    }
}

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '20s'})
} 

// Middleware example, we can use req.user because authenticateToken was added inside route
exports.findUser = async (req, res) =>{
    try{
        const user = await Users.findOne({
            where:{
                id: req.user.id
            }
        })
        return res.json(user)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: "inside findUser"})
    }
}