const { PermissionError } = require('../helpers/error')

exports.hasAdminPrivilage = async (req, res, next)=>{
    try{
        if(!req.user.isAdmin){
            res.status(403).json({error: new PermissionError()})
        }
        next()
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}