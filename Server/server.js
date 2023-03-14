const express = require('express')
const cors = require('cors')
const path =require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('Client'))

// console.log(__dirname + '../public/index.html')

app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../Client/index.html'))
})
app.get('/css', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../Client/styles.css'))
})
app.get('/js', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../Client/main.js'))
})



const {
    getResponse, addResponse, deleteResponse
} = require('./controller')

app.get("/api/response", getResponse);
app.post("/api/response", addResponse);
app.delete("/api/response", deleteResponse);

app.listen(4000, console.log(`App running on 4000`))