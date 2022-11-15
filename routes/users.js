const path = require('path');
const express = require('express');

const routes1 = express.Router();

routes1.get('/', (req, res, next) => {
    //res.send('<h1>Hello from expreess JS!</h1>');//send allows us to send a response
    res.sendFile(path.join(__dirname, '../', 'views', 'users.html'));
});

module.exports = routes1;

