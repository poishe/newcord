var app = require("express")();
var crypto = require("crypto-js");
var tmi = require("tmi.js");

app.get("/", function(request, response) {
response.sendFile("/index.html");
});

app.listen(3000);
