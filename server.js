var express = require("express"); // Express Server
var bodyParser = require("body-parser"); // Post Body Request
var logger = require("morgan"); // Logger
// var mongoose = require("mongoose");
let exphbs = require('express-handlebars'); // Templating Engine
var db = require("./models"); // Require all models

// Scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
// var axios = require("axios");
// var cheerio = require("cheerio");

// Require all models
// var db = require("./models");

// Set Default Port for Express and Heroku
let PORT = process.env.PORT || 3000; 

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Configure routes
require("./controllers/mediumController.js")(app);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
