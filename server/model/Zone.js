const db = require('../db')

class Zone {
  static async findZone (location) {
    try {
      const zone = await db.query(
        `SELECT * FROM (SELECT ST_AsText((ST_Dump(zone.border)).geom) as geom, * FROM zone) as zonepolygon WHERE ST_Contains(geom, $1)`,
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