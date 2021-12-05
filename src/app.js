const express = require('express')
const app = express()
const routes = require('./routes/routes')
const cors = require('cors')


console.log('Server starting...')

app.use('/api', routes)

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true, 
    optionSuccessStatus:200,
}
app.use(cors(corsOptions))

app.listen(3001)