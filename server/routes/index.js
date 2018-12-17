const express = require('express')
const router = express.Router()

router.get('/', async function (req, res, next) {
    res.render('formSell', {
    })
})

router.get('/show', async function (res, res, next) {
    res.render('showLand', {})
})

router.get('/showpoly', async function (res, res, next) {
    res.render('showPoly', {})
})

module.exports = router;