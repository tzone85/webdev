const express = require("express");

const app = express();

app.get("/", function (req, res) {
   res.send("<h1>Hello world</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at tzone85@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("<h3>This website belongs to Thando</h3>");
});
app.get("/hobbies", function (req, res) {
    res.send("<li>This website belongs to Thando</li>");
});

app.listen(4000, function () {
    console.log("Server started on port 4000");
});
