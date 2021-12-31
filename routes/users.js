const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Uesrs List:')
})

router.get('/new', (req, res) => {
    res.send('New user form')
})

router
    .route('/:id')
    .get((req, res) => {
        res.send(`Get the user with ID: ${req.params.id}`)
    })
    .post((req, res) => {
        res.send('Create user')
    })
    .put((req, res) => {
        res.send('Update User')
    })
    .delete((req, res) => {
        res.send('Delete user')
    })

router.param('id', (req, res, next, id) => {
    console.log('ID=', id)
    next()
})

module.exports = router