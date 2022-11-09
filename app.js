const express = require ('express');
const app = express ();

// Make everything inside of public/ available
app.use(express.static('public'));

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
app.get('/about-me', (request, response, next) => response.sendFile(__dirname + '/views/about-me.html'));
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));
app.get('/pictures', (request, response, next) => response.sendFile(__dirname + '/views/pictures.html'));


app.listen(3000)