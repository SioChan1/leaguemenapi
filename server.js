const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const req = require("express/lib/request");
const app = express("express");

require("dotenv-flow").config();

app.get("/api/welcome", (req, res) => {

    res.status(200).send({message: "Welcome to pain"});
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, function(){
    console.log("Server is running on port: " + PORT);
})

module.exports = app;
