const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/ssr_sellland'
const morganLevel = process.env.MORGAN_LEVEL || 'dev'
const port = process.env.PORT || 3000

const config = {
  databaseUrl,
  morganLevel,
  port
}

module.exports = config
