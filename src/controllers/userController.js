const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users } = require('../models')

exports.loginUser = async ({body}, res) => {
    try{
        // Authenticate User
        const { name, password} = body;
        const user = await Users.findOne({
            where : {
                name: name
            },
            raw: true
        })
        if(user == null){
            return res.status(400).json({error: "No such user found"})
        }
        console.log(user)
        if (await bcrypt.compare(password, user.password)){
            // Authorization User with JWT
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
            return res.json({accessToken: accessToken})
        }else{
            return res.status(400).json({error: "Wrong password"})
        }
    }catch(error){
        console.error('Login failed, api/users/login , '+error)
        return res.status(500).json({error: "Login failed."})
    }
}
 
exports.registerUser = async (req, res) =>{
    try{
        console.log('request call: api/users/registration')
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const user = await Users.create(req.body)
        return res.json(user)
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

// Middleware example, we can use req.user because authenticateToken was added inside route
// exports.findUser = async (req, res) =>{
//     const user =users.find(user => user.name = req.user.name)
//     return res.json(user)
// }