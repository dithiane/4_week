const express = require('express')
const cors = require('cors')
const app = express()

//middleware
app.use(cors())
app.use(express.json())

const controller = require('../controllers/controller')
const { getHouses, deleteHouse, createHouse, updateHouse } = controller;

//routes
app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

app.listen(4004, () => console.log("Server running on port 4004"))