const express = require("express");
const userService = require("../services/userServices");

const router = express.Router();

// Update user by id
router.put("/u", async function (req, res, next) {
    try {
        res.json(await userService.updateUserValue("users", req.body.value, req.body.userId));
    } catch (err) {
        console.error(`Error while update user `, err.message);
        next(err);
    }
});

// get large value in users values
router.get("/r", async function (req, res, next) {
    try {
        res.json(await userService.readLargeValue());
    } catch (err) {
        console.error(`Error get large value `, err.message);
        next(err);
    }
});


module.exports = router;