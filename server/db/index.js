const Pool = require('pg')
const config = require('../config/config')

const pool = new Pool({
  connectionString: config.databaseUrl
})

exports.query = (text, params) => {
  return new Promise((resolve, reject) => {
    pool.query(text, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}