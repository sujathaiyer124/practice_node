//import http module 
//const fs = require('fs');
const http = require('http');//require either takes a path to another file .require use to import files in nodejs
const routes = require('./exports_routes');
//The requestListener is a function which is automatically added to the 'request' event.
//create server actually returns a server so we have to store that in a new variable
const server = http.createServer(routes);

server.listen(3000);//listen takes a couple of arguments like port

