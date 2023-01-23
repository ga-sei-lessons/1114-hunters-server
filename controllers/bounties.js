// create an instance of the express router
const express = require('express')
const router = express.Router()

// mount our routes on the router

// GET /bounties -- respond w all bounties

// GET /bounties/:id -- respond with the details of a specific bounty @ id

// POST /bounties -- accept a payload of data from the request body and use it to make a new bounty

// PUT /bounties/:id -- accept a payload of data from the reqeust body and use it to update a bounty @ id

// DELETE /bounties/:id -- DESTROY a bounty @ id

// export the router
module.exports = router