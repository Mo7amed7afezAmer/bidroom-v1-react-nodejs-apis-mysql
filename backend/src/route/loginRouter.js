const express = require("express");
const userService = require("../services/userServices");

const router = express.Router();

// login user [ uname - password ] => return id as work act token
router.post("/", async function (req, res, next) {
    try {
        res.json(await userService.isLogin(req.body.username, req.body.password));
    } catch (err) {
        console.error(`Error while update user `, err.message);
        next(err);
    }
});

module.exports = router;