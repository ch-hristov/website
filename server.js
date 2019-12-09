//Install express server
const express = require('express');
const path = require('path');
var httpProxy = require('http-proxy');

var apiProxy = httpProxy.createProxyServer();
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist'));

// app.all("/api/*", function(req, res) {

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);