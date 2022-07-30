const { Coupons } = require('../models')

const create = async (couponData)=>{
    const coupon = await Coupons.create(couponData)
    return coupon;
}

const findByCompany = async (companyId)=>{
    const coupons = await Coupons.findAll({
        where: {
            company: companyId
        }
    })
    return coupons
}

const findByCode = async (activationCode)=>{
    const coupon = await Coupons.findOne({
        where: {
            activationCode
        }
    })
    return coupon
}

const use = async (activationCode)=>{
    const coupon = await findByCode(activationCode)
    const updatedCoupon = await coupon.update({
        unUsed: false
    })
    return updatedCoupon
}

module.exports = {
    create,
    findByCompany,
    findByCode,
    use
}