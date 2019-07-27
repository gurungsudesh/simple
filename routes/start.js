const express = require('express');
const Users = require('../users');
const router = express.Router();


router.get("/", (req, res) => {
    res.send(`
    <h1> Welcome to the app </h1>
    <a href="auth/login">Login </a>
    <a href ="auth/register"> Register </a>
    `);
});
module.exports = router;