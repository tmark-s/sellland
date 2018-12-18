const { Pool } = require('pg')
const config = require('../config/config')

const pool = new Pool({
  connectionString: config.databaseUrl,
})

module.exports = {
  query: (text, params) => pool.query(text, params)
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      reject(err)
    })
}