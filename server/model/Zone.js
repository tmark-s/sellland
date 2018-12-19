const db = require('../db')

class Zone {
  static async findZone (location) {
    try {
      const zone = await db.query(
        `SELECT * FROM zone WHERE ST_Contains(zone.border, ST_GeoFromText($1))`,
        [
          location
        ]
      )

      if (zone.rows[0]) {
        return zone.rows[0]
      } else {
        return undefined
      }
    } catch (err) {
      return undefined
    }
  }
}

module.exports = Zone