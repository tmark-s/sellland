const express = require('express')
const router = express.Router()

const backoffice = require('./backoffice')

router.get('/backoffice/login', async function (req, res, next) {
    res.render('loginPage', {
        isLogin: false
    })
})
router.use('/backoffice', backoffice)


module.exports = router;