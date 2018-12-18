const express = require('express')
const router = express.Router()

const Seller = require('../model/Seller')

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

module.exports = router