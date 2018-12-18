const express = require('express')
const router = express.Router()

const backoffice = require('./backoffice/index')
const backofficeAPI = require('./api')

router.get('/', async function (req, res, next) {
    res.render('loginPage', {
        isLogin: false
    })
});

router.get('/backoffice/login', async function (req, res, next) {
    res.render('loginPage', {
        isLogin: false
    })
});

router.use('/backoffice', backoffice);
router.use('/api', backofficeAPI)



module.exports = router;
