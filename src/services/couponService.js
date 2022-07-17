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

const findById = async (couponId)=>{
    const coupon = await Coupons.findOne({
        where: {
            id: couponId
        }
    })
    return coupon
}

const use = async (couponId)=>{
    const coupon = await findById(couponId)
    const updatedCoupon = await coupon.update({
        unUsed: false
    })
    return updatedCoupon
}

module.exports = {
    create,
    findByCompany,
    findById,
    use
}