const express = require('express')
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("hi")
})

app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`)
})