const mongoDbUri = process.env.MONGO_DB_URI || 'mongodb://admin:password@localhost:27017/sellland?authSource=admin'
const morganLevel = process.env.MORGAN_LEVEL || 'dev'
const port = process.env.PORT || 3000

const config = {
  mongoDbUri,
  morganLevel,
  port
}

module.exports = config
