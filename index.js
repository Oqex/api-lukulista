const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()

functin arvoNumero(alaraja, ylaraja) {
    return Math.floor(ylaraja * Math.random()) + alaraja
}

let NUMEROLISTA = [
    arvoNumero(0,5),
    arvoNumero(10,15),
    arvoNumero(100,500),
    arvoNumero(10,20),
    arvoNumero(0,5),
]

app.get('/', function (req, res) {
    res.json(['1 5 8 2 5'])
})
 
 app.listen(PORT)
