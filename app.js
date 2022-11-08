//import http module 
const fs = require('fs');
const http = require('http');//require either takes a path to another file .require use to import files in nodejs
//The requestListener is a function which is automatically added to the 'request' event.

//create server actually returns a server so we have to store that in a new variable
const server = http.createServer((req, res) => {
    const url = req.url;//parsing the url.storing in new constant
    const method = req.method;
    if (url === '/') {
        res.write('<html>');    //write allows us to write some data to the response and this basically works in chunks
        res.write('<head><title>My first Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"name="message"><button type="submit">Click me</button></body>');
        res.write('</html>');
        return res.end();

    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });//on allows you to listen data event
        //data event will be fired whenever a new chunk is ready to read
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);//parameters mein filename which we want to create and 2nd parameter mein text
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });


    }
    res.setHeader('Content-type', 'text/html');//(setHeader)this allows us to set headers
    res.write('<html>');    //write allows us to write some data to the response and this basically works in chunks
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from Node js server</h1></body>');
    res.write('</html>');
});

server.listen(3000);//listen takes a couple of arguments like port

