const express = require('express')
const router = express.Router()

const backoffice = require('./backoffice')
const api = require('./api')

router.use('/backoffice', backoffice)
router.use('/api', api)

router.get('/backoffice/login', async function (req, res, next) {
    res.render('loginPage', {
        isLogin: false
    })
})

router.get('/', async function (req, res, next) {
    res.render('formSell', {
        isLogin: false
    })
})

module.exports = router;