require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes/routes')
const cors = require('cors')

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
        origin:'http://localhost:3000', 
        methods: [
            'GET',
            'POST',
          ],
        credentials:true, 
        optionSuccessStatus:200,
    }
    app.use(cors(corsOptions))
    console.log("[cors] initialized");
  }catch(error){
    console.error("[cors] "+error);
  }

  app.use('/api', routes)

  app.listen(3001, ()=>{
    console.log("api running on port 3001")
  })
  
}catch(error){
    console.error("Error during startring the server");
}