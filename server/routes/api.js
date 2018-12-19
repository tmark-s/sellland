const express = require('express')
const router = express.Router()

const Seller = require('../model/Seller')
const ZoneController = require('../controller/ZoneController')

router.post('/create-seller', async function (req, res) {
  try {
    const seller = {}
    seller.firstname = req.body.firstname
    seller.lastname = req.body.lastname
    seller.mobileno = req.body.mobileno
    seller.email = req.body.email
    seller.createdBy = `${req.body.firstname} ${req.body.lastname}`

    const newSeller = await Seller.create(seller)
    if (newSeller) {
      res.json(newSeller)
    } else {
      res.status(400).end()
    }
  } catch (err) {
    res.status(400).json(err)
  }
})

router.get('/get-polygon', async function (req, res) {
  try {
    const polygons = await ZoneController.getPolygon();
    res.json(polygons)
  } catch (err) {
    res.status(400).json(err)
  }
})

router.get('/get-polygon/:zoneId', async function (req, res) {
  try {
    const polygons = await ZoneController.getPolygon(req.params.zoneId);
    res.json(polygons)
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router