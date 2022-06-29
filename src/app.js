require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes/routes')
const cors = require('cors')
const { requestLog } = require('./middlewares/reguestLog')

try{

  console.log('Server starting...')

  try{
    const bp = require('body-parser')
    app.use(bp.json())
    app.use(bp.urlencoded({ extended: true }))
    console.log("[bodyParser] initialized");
  }catch(error){
    console.error("[bodyParser] "+error);
  }

  try{
    const corsOptions ={
        origin: ['http://localhost:3000', "https://catering-frontend-staging-2022.herokuapp.com"],
        methods: [
            'GET',
            'POST',
            'DELETE',
            'PUT'
          ],
        credentials:true, 
        optionSuccessStatus:200,
    }
    app.use(cors(corsOptions))
    console.log("[cors] initialized");
  }catch(error){
    console.error("[cors] "+error);
  }

  app.use(requestLog)
  
  app.use('/api', routes)

  app.listen(process.env.PORT || 3001, ()=>{
    console.log("api running on port "+process.env.PORT || 3001)
  })
  
}catch(error){
    console.error("Error during startring the server");
}