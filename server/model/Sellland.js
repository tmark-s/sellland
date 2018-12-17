const db = require('../db')

class Sellland {
  static async create (sellland) {
    try {
      const rows = await db.query(
        `INSERT INTO sellland (created_by, landId, seller_id) VALUES ($1, $2, $3)`,
        [
          sellland.createdBy,
          sellland.landId,
          sellland.sellerId
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

module.exports = Sellland