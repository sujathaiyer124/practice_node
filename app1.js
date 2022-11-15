//import http module 
//const fs = require('fs');
//const http = require('http');//require either takes a path to another file .require use to import files in nodejs


const express = require('express');//import express

//
const app = express();//we can create an express application and store it in a constant name named app.
//we are running here express as a function.
//express package seems to export function again.

//understanding middleware
app.use((req, res, next) => {
    console.log('In the middleware');
    next();//Allows the middleware to continue to the next middleware in the line
});

app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from expreess JS!</h1>');//send allows us to send a response
});
//const routes = require('./exports_routes');
//The requestListener is a function which is automatically added to the 'request' event.
//create server actually returns a server so we have to store that in a new variable
//const server = http.createServer(app);




app.listen(3000);//listen takes a couple of arguments like port

