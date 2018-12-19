const express = require('express')
const router = express.Router()

const ZoneController = require('../../controller/ZoneController')


router.get('/', async function (req, res, next) {
    res.render('loginPage', {
        isLogin: true
    })
})

router.get('/land', async function (req, res, next) {
    const zones = await ZoneController.list();
    res.render('landPage', {
        isLogin: true,
        zoneList: zones,
        poly: zones.st_asgeojson
    })
})

router.get('/map', async function (req, res, next) {
    const polygons = await ZoneController.getPolygon();
    const zoneList = await ZoneController.getList();
    res.render('mapPage', {
        isLogin: true,
        zoneList: zoneList
    })
})

router.get('/map/:zoneId', async function (req, res, next) {
    const polygons = await ZoneController.getPolygon(req.params.zoneId);
    const zoneList = await ZoneController.getList();
    res.render('mapPage', {
        isLogin: true,
        zoneList: zoneList,
        polygons: polygons
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