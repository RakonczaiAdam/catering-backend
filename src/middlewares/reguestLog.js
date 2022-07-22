exports.requestLog = (req, res, next)=>{
    try{
        console.log(`\r\n[${req.method}] ${req.originalUrl}`)
        next()
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}