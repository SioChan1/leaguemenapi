const router = require('express').Router();
const user = require('../models/user');
const { registerValidation } = require('../validation');

router.post("/register", async (req, res) => {

    const { error } = registerValidation(req.body);

    if (error) {
        return res.status(400).json({error: error.details[0].message});
    }

    return res.status(200).json({msg: "Reguster route..."});
});

router.post("/login", async (req, res) => {
    return res.status(200).json({msg: "Login route..."});

})

module.exports = router;