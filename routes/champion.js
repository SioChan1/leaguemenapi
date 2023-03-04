const router = require("express").Router();
const champion = require("../models/champion");

module.exports = router;

router.post("/", (req, res) => {
    data = req.body;

    champion.insertMany(data)
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send( {message: err.message }); })

});