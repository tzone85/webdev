//jshint esversion: 6

var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var path = require('path');

const app = express();

//to render static content/pages
app.use('*/image',express.static(path.join(__dirname, 'public/image')));
app.use('*/js',express.static(path.join(__dirname, 'public/javascripts')));
app.use('*/css',express.static(path.join(__dirname, 'public/css')));

app.use(bodyParser.urlencoded({extended:true}) );

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/signup.html"));
});

app.post("/", function (req, res) {
   var firstName = req.body.fName;
   var lastName = req.body.lName;
   var email = req.body.email;

   console.log(firstName, lastName, email);
});

app.listen(3000, function () {
    console.log("listenning to port 3000");
});
