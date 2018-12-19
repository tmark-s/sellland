const db = require('../db')

class Seller {
  static async create (seller) {
    try {
      const { rows } = await db.query(
        `INSERT INTO seller (firstname, lastname, mobileno, email, created_by, updated_by) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [
          seller.firstname,
          seller.lastname,
          seller.mobileno,
          seller.email,
          seller.createdBy,
          seller.createdBy
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

module.exports = Seller