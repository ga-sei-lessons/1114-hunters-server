// require the mongoose package
const mongoose = require('mongoose')

// make a mongo uri and connect to it
const dbName = 'bountyApi'
const uri = 'mongodb://127.0.0.1/' + dbName
mongoose.connect(uri)

// define some success and failure debug logs
const db = mongoose.connection
db.once('open', () => console.log(`connected to mongoDB at ${db.host}:${db.port} ⛓`) )
db.on('error', err => console.log('mongodb is mad 😤', err))

// export all models here
module.exports = {
    Bounty: require('./Bounty')
}