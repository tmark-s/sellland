const express = require('express')
const router = express.Router()

const api = require('./api')

router.use('/api', api)

router.get('/', async function (req, res, next) {
    res.render('landPage', {
        isLogin: true
    })
})

router.get('/land', async function (req, res, next) {
    res.render('landPage', {
        isLogin: true
    })
})

router.get('/show', async function (res, res, next) {
    res.render('showLand', {
        isLogin: true
    })
})

router.get('/showpoly', async function (res, res, next) {
    res.render('showPoly', {
        isLogin: true
    })
})

module.exports = router