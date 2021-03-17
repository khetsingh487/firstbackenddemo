const express = require('express');

const router = new express.Router();

router.get("/", (req, res) => {
    res.render("index");
})

router.get("/about", (req, res) => {
    res.render("about");
})

router.get("/services", (req, res) => {
    res.render("services");
})

router.get("/gallary", (req, res) => {
    res.render("gallary");
})
router.get("/signin", (req, res) => {
    res.render("signin");
});


router.get("/register", (req, res) => {
    res.render("register");
})





module.exports = router;