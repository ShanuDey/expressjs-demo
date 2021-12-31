const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.download('server.js')
})

app.listen(process.env.PORT || 3000)
