const express = require('express')
const { route } = require('./controllers/routes')
const app = express()
const routes = require('./controllers/routes')

console.log('Server starting...')

app.use('/api', routes)

app.listen(3001)