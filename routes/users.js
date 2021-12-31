const express = require('express')
const { render } = require('express/lib/response')
const router = express.Router()

let users = []
router.get('/', (req, res) => {
    res.send('Uesrs List:')
})

router.post('/', (req, res) => {
    const isValid = true
    if(isValid){
        users.push({'Name': req.body.firstName})
        res.redirect(`/users/${ users.length -1 }`)
    }
    else{
        console.log('error')
        res.render('newUser', {firstName: req.body.firstName})
    }
})

router.get('/new', (req, res) => {
    res.render('newUser', {firstName: 'test'})
})

router
    .route('/:id')
    .get((req, res) => {
        res.send(`Get the user with ID: ${req.params.id}<br> Name: ${users[req.params.id].Name}`)
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