const router = require('express').Router()

const users = [{name: "Adam", password: "asdfgh"},{name: "Pete", password: "íyxcvb!!"}]

router.get('/', (req, res) => {
    try{
        console.log('request call: api/users/')
        res.send(users)
    }catch(error){
        console.error("request failed: api/users/")
    }
})

router.post('/registration', (req, res)=>{
    try{
        console.log('request call: api/users/registration')
        users.push(req.body)
        res.send(users)
    }catch(error){
        console.error("request failed: api/users/registration")
    }
})

module.exports = router