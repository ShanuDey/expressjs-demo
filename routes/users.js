const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Uesrs List:')
})

router.get('/new', (req, res) => {
    res.send('New user form')
})

router.get('/:id', (req, res) => {
    res.send(`Get the user with ID: ${req.params.id}`)
})

module.exports = router