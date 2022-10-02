const couponService = require('../services/couponService')
const { generate } = require('../helpers/activationCode')
const { v4: uuid4 } = require('uuid');

const createCoupon = async (req, res)=>{
    try{
        const coupon = await couponService.create({
            id: uuid4(),
            activationCode: generate(),
            value: req.body.value,
            expirationDate: new Date(),
            customerEmail: req.body.customerEmail,
            madeBy: req.user.id,
            transaction: null,
            company: req.user.company,
            unUsed: true
        }).catch((error)=>{
            if(error.name === "SequelizeUniqueConstraintError"){
                createCoupon();
            }
        })
        return res.json(coupon);
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

const use = async (req, res)=>{
    try{
        const used = await couponService.use(req.body.activationCode, req.body.transaction)
        return res.json(used)
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createCoupon,
    use
}