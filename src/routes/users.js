const router = require('express').Router()

const users = [{name: "Adam", password: "asdfgh"},{name: "Pete", password: "íyxcvb!!"}]

router.get('/', (req, res) => {
    console.log('request call: api/users/')
    res.send(users)
})

router.post('/registration', (req, res)=>{
    //users.push(req)
    console.log(req.body)
    res.send(users)
})

module.exports = router