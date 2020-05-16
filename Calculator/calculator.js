const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function (req, res) {

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;
    res.send("Result of calculated is: "+result);
});

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {

    let height = parseFloat(req.body.height);
    let weight = parseFloat(req.body.weight);

    let result = weight/(height * height);
    res.send("The BMI is: "+result);
});

app.listen(4000, function () {
    console.log("server running on port 4000");
});