const express = require('express')
const router = express.Router()

const backoffice = require('./backoffice')

router.use('/backoffice', backoffice)

module.exports = router

