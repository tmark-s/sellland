const express = require('express')
const router = express.Router()

const backoffice = require('./backoffice')

<<<<<<< HEAD
router.use('/backoffice', backoffice)

module.exports = router

=======
router.get('/backoffice/login', async function (req, res, next) {
    res.render('loginPage', {
        isLogin: false
    })
})
router.use('/backoffice', backoffice)


module.exports = router;
>>>>>>> eeb358961babcf37acc2a50a7e173951866730b3
