// var express = require('express');

//Create App

// var app = express();
// app.use(express.static('public'));

// app.listen(3000, function() {
// 	console.log('Express server is running on port 3000.');
// });

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '/public', 'index.html'));
});

app.listen(port);
console.log('Server started');
