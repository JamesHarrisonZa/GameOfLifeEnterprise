'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 42420; //Env variable set by hosting enviroment
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static('public'))
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);