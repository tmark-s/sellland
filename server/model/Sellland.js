const db = require('../db')

class Sellland {
  static async create (sellland) {
    const seller = await db.query(
      `SELECT * FROM seller WHERE firstname = $1 AND lastname = $2`,
      [
        sellland.firstname,
        sellland.lastname
      ]
    )

    if (!seller.rows[0]) {
      try {
        await db.query('BEGIN')
          
        const newSeller = await db.query(
          `INSERT INTO seller (firstname, lastname, mobileno, email, created_by, updated_by) 
          VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
          [
            sellland.firstname,
            sellland.lastname,
            sellland.mobileno,
            sellland.email,
            sellland.createdBy,
            sellland.updatedBy
          ]
        )

        const newLand = await db.query(
          `INSERT INTO land (border, rai, ngan, wa, price_per_wa, road, province_id, district_id, sub_district_id,
          land_slide, land_certificate, map_of_land, created_by, zone_id, updated_by, location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,
          $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`,
          [
            sellland.border,
            sellland.rai,
            sellland.ngan,
            sellland.wa,
            sellland.pricePerWa,
            sellland.road,
            sellland.provinceId,
            sellland.districtId,
            sellland.subDistrictId,
            sellland.landSlide,
            sellland.landCertificate,
            sellland.mapOfLand,
            sellland.createdBy,
            sellland.zoneId,
            sellland.updatedBy,
            sellland.location
          ]
        )

        const newSellland = await db.query(
          `INSERT INTO sellland (seller_id, land_id, created_by, updated_by) VALUES ($1, $2, $3, $4) RETURNING *`,
          [
            newSeller.rows[0].id,
            newLand.rows[0].id,
            sellland.createdBy,
            sellland.updatedBy
          ]
        )

        await db.query('COMMIT')

        return newSellland.rows[0]
      } catch (err) {
        await db.query('ROLLBACK')

        return undefined
      }
    } else {
      try {
        await db.query('BEGIN')

        const newLand = await db.query(
          `INSERT INTO land (border, rai, ngan, wa, price_per_wa, road, province_id, district_id, sub_district_id,
          land_slide, land_certificate, map_of_land, created_by, zone_id, updated_by, location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,
          $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`,
          [
            sellland.border,
            sellland.rai,
            sellland.ngan,
            sellland.wa,
            sellland.pricePerWa,
            sellland.road,
            sellland.provinceId,
            sellland.districtId,
            sellland.subDistrictId,
            sellland.landSlide,
            sellland.landCertificate,
            sellland.mapOfLand,
            sellland.createdBy,
            sellland.zoneId,
            sellland.updatedBy,
            sellland.location
          ]
        )

        const newSellland = await db.query(
          `INSERT INTO sellland (seller_id, land_id, created_by, updated_by) VALUES ($1, $2, $3, $4) RETURNING *`,
          [
            seller.rows[0].id,
            newLand.rows[0].id,
            sellland.createdBy,
            sellland.updatedBy
          ]
        )

        await db.query('COMMIT')

        return newSellland.rows[0]
      } catch (err) {
        await db.query('ROLLBACK')

        return undefined
      }
    }
  }
}

module.exports = Sellland