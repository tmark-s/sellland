const { Pool } = require('pg')
const config = require('../config/config')

const pool = new Pool({
  connectionString: config.databaseUrl,
})

module.exports = {
  query: (text, params) => {
    return pool.query(text, params)
  }
}