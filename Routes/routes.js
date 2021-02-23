const express = require("express");
const mongoose = require("mongoose");
const UserService = require("../Service/UserService");
const router = express.Router();

router.post("/register", UserService.Register);

router.get("/users", UserService.getUsers);

router.post("/login", UserService.Login);

module.exports = router;
