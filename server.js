const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(logger)
// app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index', {text: req.query.name})
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)

function logger(req, res, next){
    console.log('Url = ', req.originalUrl)
    next()
}

app.listen(process.env.PORT || 3000)
