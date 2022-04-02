const express = require('express')
const app = express()
const routes = require('./routes/routes')
const cors = require('cors')

console.log('Server starting...')

try{
  const bp = require('body-parser')
  app.use(bp.json())
  app.use(bp.urlencoded({ extended: true }))
  console.log("body parser ok");
}catch(error){
  console.log("body parser error: "+error);
}


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

app.use('/api', routes)

app.listen(3001)