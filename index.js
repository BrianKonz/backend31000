const express = require ('express')
const app = express ()
const puerto = 8080

app.get('/', (req, res) => {
    res.send('hola soy Brian')
}) 

app.get('/User', (req, res) => {
    res.send('hola soy usuario')
}) 

app.listen(puerto, () => {
    console.log(`el servidor esta escuchando el puerto: ${puerto}`)
    console.log(`el servidor esta escuchando el puerto: ${puerto}`)
})