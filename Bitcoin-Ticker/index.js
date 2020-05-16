//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function (req, res) {

    // user selection from the dropdown

    let crypto = req.body.crypto;
    let fiat = req.body.fiat;

    // let baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker";

    let baseURL = "https://apiv2.bitcoinaverage.com/convert/global";
    let amount = req.body.amount;
    let finalURL = baseURL + crypto + fiat;

    let options = {
        url: baseURL,
        method: "GET",
        qs: {
            from: crypto,
            to: fiat,
            amount: amount
        }
    }

    // (supported currencies - no need for auth) curl https://apiv2.bitcoinaverage.com/info/indices/ticker
    request(options, function (error, response, body) {

        let data = JSON.parse(body);
        let price = data.price;

        console.log(price);

        let currentDate = data.time;

        res.write("<small>The current date is </small>"+currentDate);
        res.write("<h1>" + amount + crypto + " is currently worth </h1>" + price + " " + fiat);

        res.send();

        console.log(price);
    });
});


app.listen(3000, function () {
    console.log("server is running on port 3000");
});