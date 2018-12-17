const db = require('../db')

class Land {
  static async create (land) {
    try {
      const rows = await db.query()
    } catch (err) {
      return undefined
    }
  }
}

module.exports = Land

