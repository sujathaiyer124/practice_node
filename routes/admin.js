const express = require('express');

const app = express();

app.get('/user',(res, req, next) => {
    res.send('</h1>Hello yhis is practiice file </h1>');
});
app.listen(3000);