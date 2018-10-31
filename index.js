//require('./app')

const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    fs.readFile("index.html", function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });
})

app.get('/app/main.js', (request, response) => {
    console.log("GET app/main.js");
    fs.readFile("app/main.js", function(err, data){
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.write(data);
        response.end();
    });
})

app.listen(port, (err) => {
    if (err) {
        return console.log('error setting up server', err)
    }
    console.log(`successfuly set up server at port ${port}`);
})

