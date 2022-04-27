const { UserStores, Stores, Users } = require('../models')
const { Op } = require('sequelize')

exports.createUserStore = async (req, res)=>{
    try{
        const {user, store} = req.body
        const userStore = await UserStores.create({
            user: user,
            store: store
        })
        return res.json(userStore)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: "user store create error"})
    }
}

exports.findByCompanyId = async (req, res)=>{
    try{
        const userStores = await UserStores.findAll({
            where: {
                '$Store.company$': {[Op.eq]: req.user.company}
            },
            include: [
                {
                    model: Stores,
                    as: 'Store'
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        })
        return res.json(userStores)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: "user store fetch error"})
    }
}

exports.deleteById = async (req, res)=>{
    try{
        const { userStoreId: id} = req.params
        const deketedRows = await UserStores.destroy({
            where : {
                id: id
            }
        })
        return res.json(deketedRows)
    }catch(error){
        console.error(error)
        return res.status(500).json({error: "user store delete error"})
    }
}

