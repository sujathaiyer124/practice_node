const path=require('path');
//handling different routes
const express = require('express');//import express

const app = express();//we can create an express application and store it in a constant name named app.
//we are running here express as a function.
//express package seems to export function again.

const adminRoutes = require('./routes/admin');//importing router object here

const userRoutes = require('./routes/users');//importing routes1 object here from user.js file

const bodyParser = require('body-parser');//import bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes);
app.use('/users',userRoutes);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','page404.html'));
});
app.listen(3000);//listen takes a couple of arguments like port
