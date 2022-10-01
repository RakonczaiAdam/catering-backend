require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes/routes')
const { requestLog } = require('./middlewares/reguestLog')
const corsConfig = require("./middlewares/cors")

try{

  console.log('Server starting...')
  console.log('enviroment: '+process.env.NODE_ENV)

  const bp = require('body-parser')
  app.use(bp.json())
  app.use(bp.urlencoded({ extended: true }))
  console.log("[bodyParser] initialized");

  app.use(corsConfig);

  app.use(requestLog)
  
  app.use('/api', routes)

  app.listen((process.env.PORT || 3001), ()=>{
    console.log("api running on port "+(process.env.PORT || 3001))
  })
  
}catch(error){
    console.error("Error during startring the server: ");
    console.log(error)
}