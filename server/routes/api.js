const express = require('express')
const router = express.Router()

const SelllandController = require('../controller/SelllandController')

router.post('/create-sellland', async function (req, res) {
  try {
    const newSellland = await SelllandController.create(
      req.body.firstname,
      req.body.lastname,
      req.body.mobileno,
      req.body.email,
      req.body.border,
      req.body.rai,
      req.body.ngan,
      req.body.wa,
      req.body.pricePerWa,
      req.body.road,
      req.body.provinceId,
      req.body.districtId,
      req.body.subDistrictId,
      req.body.landSlide,
      req.body.landCertificate,
      req.body.mapOfLand,
      req.body.location
    )

    if (newSellland) {
      res.json(newSellland)
    } else {
      res.status(400).end()
    }
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router