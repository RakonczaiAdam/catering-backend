const couponService = require('../services/couponService')

const createCoupon = async (req, res)=>{
    try{
        // const coupon = await couponService.create({
        //     activationCode: 
        // })
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const findByCode = async (req, res)=>{
    try{
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createCoupon,
    findByCode
}