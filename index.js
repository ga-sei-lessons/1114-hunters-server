// required packages
const express = require('express')
const cors = require('cors')

// app config
const app = express()
const PORT = 8000
// connect to db
require('./models') // requiring models to connect to the db

// middlewares
// allow 'cross origin resource sharing'
app.use(cors())
// enable json request body parsing
app.use(express.json())

// routes/controllers
app.get('/', (req, res) => {
    res.json({ msg: "Welcome to the bounties API 👋" })
})

app.use('/bounties', require('./controllers/bounties'))

// listen on a port for incoming requests
app.listen(PORT, () => console.log(`Hunting Bounties on ${PORT}`))