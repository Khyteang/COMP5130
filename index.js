require('./app/index')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello from node')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('error setting up server', err)
    }
    console.log(`Server listening on port ${port}`)
})


