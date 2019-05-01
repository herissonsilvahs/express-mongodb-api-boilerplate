const express = require('express')
let app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const port = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(cors())
app.disable('x-powered-by')
app.enable('trust proxy')

// Connection MongoDB
require('./services/MongoDBService')

// ROUTES
require('./routes/index')(app)

let appStatus = false

try {
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
    appStatus = true
  })
} catch (err) {
  appStatus = false
}

module.exports = appStatus