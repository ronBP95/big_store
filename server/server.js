const express = require('express');
const { connect } = require('mongoose');
require('dotenv').config()
const app = express();
const connectDB = require('./config/db')
const PORT = process.env.PORT || 4000;

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.send("Index Route")
})

app.use('/api/users', require('./routes/users/userRoutes'))

app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`)
})