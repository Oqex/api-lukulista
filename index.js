const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()

app.get('/', function (req, res) {
    res.send('1 5 8 2 5')
})
 
 app.listen(PORT)
