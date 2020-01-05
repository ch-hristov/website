//Install express server
const express = require('express');
const path = require('path');
var httpProxy = require('http-proxy');

var apiProxy = httpProxy.createProxyServer();
const app = express();

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
      return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
  }

  
app.use(requireHTTPS);
// Serve only the static files form the dist directory
app.use(express.static('./dist'));

// app.all("/api/*", function(req, res) {

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);