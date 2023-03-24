var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
require('dotenv').config();

var app = express();
app.use(bodyParser.json());

consign()
	.include('./api/routes')
	.then('./api/controllers')
	.into(app);

module.exports = app;