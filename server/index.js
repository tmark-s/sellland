const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const Mongoose = require('./db')
const config = require('./config/config')

Mongoose.getSingleton()
  .then(() => {
    console.log("Database connected successfully.")
  })

const app = express()

app.use(morgan(config.morganLevel))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(config.port, () => console.log('Listening on ' + config.port))


