const express = require ('express')
const app = express ()
const puerto = 8080

app.use((req, res, next) => {
    visitas++
})

app.get('/', (req, res) => {
    
})

app.get('/productos', (req, res) => {
    
})

app.get('/productosRandom', (req, res) => {
    
})

app.listen(puerto, (error) => {
    if (!error){
        console.log(`el servidor esta escuchando el puerto: ${puerto}`) 
    } else
    console.log(`Hubo un error al iniciar el server: ${puerto}`) 
})