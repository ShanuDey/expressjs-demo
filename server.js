const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {text: 'World'})
})

app.listen(process.env.PORT || 3000)
