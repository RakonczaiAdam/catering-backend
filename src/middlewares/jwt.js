const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) =>{
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if(token == null){
            return res.status(401)
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) =>{
            if(error){
                console.error(error)
                return res.status(403).json({error: "Error during verifying jwt."})
            }
            req.user = user
            next()
        })
    }catch(error){
        console.error(error)
    }
}