const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const { registerValidation } = require('../validation');

router.post("/register", async (req, res) => {

    const { error } = registerValidation(req.body);

    if (error) {
        return res.status(400).json({error: error.details[0].message});
    }

    const emailExist = await User.findOne({ email: req.body.email});

    if (emailExist) {
        return res.status(400).json({ error: "Email already taken"});
    }

});

router.post("/login", async (req, res) => {
    return res.status(200).json({msg: "Login route..."});

})

module.exports = router;