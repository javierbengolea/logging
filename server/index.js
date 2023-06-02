const express = require('express');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const PORT = process.env.PORT || 3060;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});