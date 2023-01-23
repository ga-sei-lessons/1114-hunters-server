// require the mongoose package
const mongoose = require('mongoose')
/*
name: String
wantedFor: String
client: String
ship: String
reward: Number
captured: Bool
lastSeen: String
{ timestamps }
*/

// define a mongoose schema
const BountySchema = new mongoose.Schema({
    name: {
        type: String
    },
    wantedFor: {
        type: String
    },
    client: {
        type: String
    },
    ship: {
        type: String
    },
    reward: {
        type: Number
    },
    captured: {
        type: Boolean
    },
    lastSeen: {
        type: String
    },
    // things: {
    //     type: [String]
    // }
}, {
    timestamps: true
})

// turn that schema into a model, and export it
module.exports = mongoose.model('Bounty', BountySchema)