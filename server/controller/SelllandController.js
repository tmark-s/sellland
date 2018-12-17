const Land = require('../model/Land')
const Seller = require('../model/Seller')
const Sellland = require('../model/Sellland')

class SelllandController {
  static async create (
    firstname,
    lastname,
    mobileno,
    email,
    border,
    rai,
    ngan,
    wa,
    pricePerWa,
    road,
    provinceId,
    districtId,
    subDistrictId,
    landSlide,
    landCertificate,
    mapOfLand,
    createdBy,
    zoneId
  ) {
    try {
      const seller = await Seller.findByName(firstname, lastname)
      if (!seller) {
        const sellerObj = {}
        sellerObj.firstname = firstname
        sellerObj.lastname = lastname
        sellerObj.mobileno = mobileno
        sellerObj.email = email
        seller.createBy = `${firstname} ${lastname}`

        const newSeller = await Seller.create(sellerObj)
        if (!newSeller) {
          return undefined
        }
      }

      const landObj = {}
      landObj.border = border
      landObj.rai = rai
      landObj.ngan = ngan
      landObj.wa = wa
      landObj.pricePerWa = pricePerWa
      landObj.road = road
      landObj.provinceId = provinceId
      landObj.districtId = districtId
      landObj.subDistrictId = subDistrictId
      landObj.landSlide = landSlide
      landObj.landCertificate = landCertificate
      landObj.mapOfLand = mapOfLand
      landObj.createdBy = `${firstname} ${lastname}`
      landObj.zoneId = zoneId
      const newLand = await Land.create(landObj)
      

    } catch (err) {
      return undefined
    }
  }
}