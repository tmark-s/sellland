const db = require('../db')

class Land {
  static async create (land) {
    try {
      const rows = await db.query(
        `INSERT INTO land (border, rai, ngan, wa, price_per_wa, road, province_id, district_id, sub_district_id,
        land_slide, land_certificate, map_of_land, created_by, zone_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,
        $9, $10, $11, $12, $13, $14)`,
        [
          land.border,
          land.rai,
          land.ngan,
          land.wa,
          land.pricePerWa,
          land.road,
          land.provinceId,
          land.districtId,
          land.subDistrictId,
          land.landSlide,
          land.landCertificate,
          land.mapOfLand,
          land.createdBy,
          land.zoneId
        ]
      )

      if (rows[0]) {
        return rows[0]
      } else {
        return undefined
      }
    } catch (err) {
      return undefined
    }
  }
}

module.exports = Land

