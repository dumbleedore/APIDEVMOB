const express = require("express");
const mongoose = require("mongoose");
const UserService = require("../Service/UserService");
const router = express.Router();

router.post("/register", UserService.Register);

router.post("/find", (req, res) => {});

module.exports = router;
