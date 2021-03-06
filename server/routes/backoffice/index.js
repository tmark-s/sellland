const express = require('express')
const router = express.Router()

const ZoneController = require('../../controller/ZoneController')


router.get('/', async function (req, res, next) {
    res.render('loginPage', {
        isLogin: true
    })
})

router.get('/land', async function (req, res, next) {
    const zoneList = await ZoneController.getList();
    const lands = await ZoneController.getViewOfferedDataInZone();
    res.render('landPage', {
        isLogin: true,
        zoneList: zoneList,
        reportOfferedLand: lands
    })
})

router.get('/land/:zoneId', async function (req, res, next) {
    const zoneId = req.params.zoneId;
    const zoneList = await ZoneController.getList();
    const lands = await ZoneController.getViewOfferedDataInZone(zoneId);
    res.render('landPage', {
        isLogin: true,
        zoneId: zoneId,
        zoneList: zoneList,
        reportOfferedLand: lands
    })
})

router.get('/map', async function (req, res, next) {
    const zoneList = await ZoneController.getList();
    res.render('mapPage', {
        isLogin: true,
        zoneList: zoneList
    })
})

router.get('/map/:zoneId', async function (req, res, next) {
    const zoneId = req.params.zoneId;
    const zoneList = await ZoneController.getList();
    res.render('mapPage', {
        isLogin: true,
        zoneList: zoneList,
        zoneId: zoneId
    })
})

router.get('/create', async function (res, res, next) {
    res.render('formSell', {
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