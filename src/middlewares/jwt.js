const jwt = require('jsonwebtoken');
const { TokenExpiredError, ResourceError } = require('../helpers/error')

exports.authenticateTokenTEST = (req, res, next) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)
    next()
}

exports.authenticateToken = (req, res, next) =>{
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if(token == null){
            return res.status(401).json({error: new ResourceError()})
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) =>{
            if(error){
                console.error(error.name)
                return res.status(401).json({error: new TokenExpiredError()})
            }
            req.user = user
            next()
        })
    }catch(error){
        console.error(error)
    }
}