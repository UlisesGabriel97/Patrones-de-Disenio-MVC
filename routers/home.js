const {home, about} = require("../controllers/mainController")
const express = require("express");
const router = express.Router();
const path = require("path")


router.get("/", home);
router.get("/about", about)

module.exports = router;