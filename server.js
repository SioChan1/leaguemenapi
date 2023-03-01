const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const req = require("express/lib/request");
const app = express("express");

require("dotenv-flow").config();

app.get("/api/welcome", (req, res) => {

    res.status(200).send({message: "Welcome to pain"});
})

mongoose.connect
(
    process.env.DBHOST,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
).catch(error => console.log("QwQ it is not working, DB sad:" + error));

mongoose.connection.once('open', () => console.log('It is working, owo'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, function(){
    console.log("Server is running on port: " + PORT);
})

module.exports = app;
