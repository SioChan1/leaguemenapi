const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const req = require("express/lib/request");
const champion = require("./models/champion");
const app = express("express");

const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

const swaggerDefinition = yaml.load('./swagger.yaml');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

const championRoutes = require("./routes/champion");
const authRoutes = require("./routes/auth");

require("dotenv-flow").config();

app.use(bodyParser.json());

mongoose.connect
(
    process.env.DBHOST,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
).catch(error => console.log("QwQ it is not working, DB sad:" + error));

mongoose.connection.once('open', () => console.log('It is working, owo'));

app.get("/api/welcome", (req, res) => {

    res.status(200).send({message: "Welcome to pain"});
})

app.use("/api/champions", championRoutes);
app.use("/api/user", authRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, function(){
    console.log("Server is running on port: " + PORT);
})

module.exports = app;
