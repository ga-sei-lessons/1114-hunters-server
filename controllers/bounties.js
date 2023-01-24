// create an instance of the express router
const express = require('express')
const router = express.Router()
const db = require('../models')

// mount our routes on the router

// GET /bounties -- respond w all bounties
router.get('/', async (req, res) => {
    try {
        // find all bounties
        const bounties = await db.Bounty.find({})
        // send bounties back, status 200 express's default
        res.json(bounties)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
    }
 })

// GET /bounties/:id -- respond with the details of a specific bounty @ id
router.get('/:id', async (req, res) => {
    try {
        // look up a bounty using the id from the request parameters
        const bounty = await db.Bounty.findById(req.params.id)
        // if the bounty is not found, respond with 404
        if (!bounty) {
            res.status(404).json({ msg: "not found" })
            return // don't want to send headers twice, stop the function
        }
        // respond with the bounty we found
        res.json(bounty)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
        }
    }
})

// POST /bounties -- accept a payload of data from the request body and use it to make a new bounty
router.post('/', async (req, res) => {
    try {
        // add a new bounty to the db, based on the req.body
        const bounty = await db.Bounty.create(req.body)
        // either redirect to where the client can find the new bounty OR send back the new bounty
        res.status(201).json(bounty)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
    }
})

// PUT /bounties/:id -- accept a payload of data from the reqeust body and use it to update a bounty @ id
router.put('/:id', async (req, res) => {
    try {
        // get the id from the url
        // get the data to update in from the req.body
        const updatedBounty = await db.Bounty.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedBounty) {
            res.status(404).json({ msg: "not found" })
            return // don't want to send headers twice, stop the function
        }
        // send the udpated bounty     
        res.json(updatedBounty)   
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
        }
    }
})

// DELETE /bounties/:id -- DESTROY a bounty @ id
router.delete('/:id', async (req, res) => {
    try {
        // get the id from the url, and destroy that id
        const deletedBounty = await db.Bounty.findByIdAndDelete(req.params.id)
        if (!deletedBounty) {
            res.status(404).json({ msg: "not found" })
            return // don't want to send headers twice, stop the function
        }
        // send a status of 204 (no content) and nothing else
        res.sendStatus(204)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
        }
    }
})

// export the router
module.exports = router