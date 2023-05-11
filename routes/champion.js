const router = require("express").Router();
const champion = require("../models/champion");
const { verifyToken } = require("../validation");

module.exports = router;

/*router.post("/", verifyToken, (req, res) => {
    data = req.body;

    champion.insertMany(data)
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send( {message: err.message }); })

});*/

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

router.put("/:id", (req, res) => {

    const id = req.params.id;

    champion.findByIdAndUpdate(id, req.body)
    .then(data => { 
        if (!data)
        { 
        res.status(404). send({ message: "Can not update the Champion with id=" + id + "Maybe the champion is lost in the void!"})
        }
        else
        {
            res.send({message: "Champion has been updated!"})
        }
     })
    .catch(err => { res.status(500).send( {message: "Error updating champion with id=" +
    id }); })

});

router.delete("/:id", verifyToken, (req, res) => {

    const id = req.params.id;

    champion.findByIdAndDelete(id)
    .then(data => { 
        if (!data)
        { 
        res.status(404). send({ message: "Can not delete the Champion with id=" + id + "Maybe the champion is lost in the void!"})
        }
        else
        {
            res.send({message: "Champion has been sent to void!"})
        }
     })
    .catch(err => { res.status(500).send( {message: "Error deleting champion with id=" +
    id }); })

});