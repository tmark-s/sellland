const Sellland = require('../model/Sellland')
const Zone = require('../model/Zone')

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
    location
  ) {
    try {
      const sellland = {}
      sellland.firstname = firstname
      sellland.lastname = lastname
      sellland.mobileno = mobileno
      sellland.email = email
      sellland.createdBy = `${firstname} ${lastname}`
      sellland.updatedBy = `${firstname} ${lastname}`
      sellland.border = border
      sellland.rai = rai
      sellland.ngan = ngan
      sellland.wa = wa
      sellland.pricePerWa = pricePerWa
      sellland.road = road
      sellland.provinceId = provinceId
      sellland.districtId = districtId
      sellland.subDistrictId = subDistrictId
      sellland.landSlide = landSlide
      sellland.landCertificate = landCertificate
      sellland.mapOfLand = mapOfLand
      sellland.location = location

      const zone = await Zone.findZone(location)
      if (zone) {
        const zoneId = []
        zone.forEach(x => {
          zoneId.push(x.id)
        })
        sellland.zoneId = zoneId
      } else {
        sellland.zoneId = undefined
      }

      const newSellland = await Sellland.create(sellland)

      if (newSellland) {
        return newSellland
      } else {
        return undefined
      }
    } catch (err) {
      return undefined
    }
  }
}

module.exports = SelllandController