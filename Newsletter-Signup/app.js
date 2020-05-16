//jshint esversion: 6

var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended:true}) );

app.listen(3000, function () {
    console.log("listenning to port 3000");
});
