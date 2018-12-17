const db = require('../db')

class Seller {
  static async create (seller) {
    try {
      const rows = await db.query(
        `INSERT INTO seller (firstname, lastname, mobileno, email, created_by) VALUES ($1, $2, $3, $4, $5)`,
        [
          seller.firstname,
          seller.lastname,
          seller.mobileno,
          seller.email,
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

  static async findByName (firstname, lastname) {
    try {
      const rows = await db.query(
        `SELECT * FROM seller WHERE firstname = $1 AND lastname = $2`,
        [
          firstname,
          lastname
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