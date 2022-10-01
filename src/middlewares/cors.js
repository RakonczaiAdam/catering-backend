const cors = require('cors')

const corsOptions ={
    origin: [
      'http://localhost:3000', 
      "https://catering-frontend-staging-2022.herokuapp.com",
      "https://catering-frontend-2021.herokuapp.com",
      "http://www.catering-software.space",
      "http://catering-software.space"
    ],
    methods: [
        'GET',
        'POST',
        'DELETE',
        'PUT'
      ],
    credentials:true, 
    optionSuccessStatus:200,
}

module.exports = cors(corsOptions)