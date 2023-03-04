const router = require("express").Router();
const champion = require("../models/champion");

module.exports = router;

router.post("/", (req, res) => {
    data = req.body;

    champion.insertMany(data)
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send( {message: err.message }); })

});

router.get("/", (req, res) => {

    champion.find()
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send( {message: err.message }); })

});

router.get("/:id", (req, res) => {

    champion.findById(req.params.id)
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send( {message: err.message }); })

});
