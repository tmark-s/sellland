const mongoose = require('mongoose')

const config = require('../config/config')

class Mongoose {
  constructor (mongoDbUri) {
    this.mongoDbUri = mongoDbUri
  }

  get connected () {
    // Connection ready state
    // 0 = disconnected
    // 1 = connected
    // 2 = connecting
    // 3 = disconnecting
    return this._db.connection.readyState === 1
  }

  async init () {
    const options = {
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000
    }

    this._db = await mongoose.connect(this.mongoDbUri, options)
  }

  get connection () {
    return this._db.connection
  }
}

////////////////////////////////////////////////////////////////////////////////
// Singleton
////////////////////////////////////////////////////////////////////////////////

let singleton = undefined

Mongoose.getSingleton = async function () {
  if (!singleton) {
    singleton = new Mongoose(config.mongoDbUri)
    await singleton.init()
  }
  return singleton
}

module.exports = Mongoose