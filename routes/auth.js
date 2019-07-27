const express = require('express');
const Users = require('../users');
const router = express.Router();
const jwt = require('jsonwebtoken');



router.post("/register", (req, res) => {
    res.send("Register");
});

router.get("/login", (req, res) => {
    res.send(`
        <form method="POST" action="/auth/login">
        <input type="text" name="uname" placeholder="Username">
        <input type = "password"
        name = "password"
        placeholder = "Password" >
        <button type="submit"> Login </button>
        </form>
        <a href="/register> Register </a>
    `);
});

router.post("/login", async(req, res) => {

    const username = req.body.uname;
    const password = req.body.password;
    console.log(username, password);

    if (!username && !password) {
        res.redirect('/auth/login');
    } else if ("mango" === username && "mango" === password) {

        //create a token 
        const token = jwt.sign({ name: username }, "secret");
        // console.log(token);
        //window.localStorage.setItem(tkn, token);
        //res.header('auth-token', token).redirect('/auth/login');
        res.json({ token });

        // await window.localStorage.setItem('token', token);
        // res.redirect('/auth/home')
        // res.send(token);
    } else {
        res.redirect('/auth/login');
    }

});
router.get("/home", (req, res) => {
    var token = req.query.token;
    console.log(token);
    res.send(`
    <h1> Home </h1>
    <ul>
        <li> Name: </li>
        <li> email: </li>
    </ul>
    <form method="post" action= "/auth/logout">
        <button type="submit"> Logout </button>
    </form>
    
    `);
});

router.post("/logout", (req, res) => {
    res.redirect("/");
});


module.exports = router;