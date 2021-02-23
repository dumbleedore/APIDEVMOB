const express = require("express");
const mongoose = require("mongoose");
const User = require("../Models/User");
const router = express.Router();

module.exports = {
  async Register(req, res) {
    const username = req.body.username;
    await User.find({ username: username }, (error, data) => {
      if (data.length == 0) {
        const usuario = new User({
          username: req.body.username,
          password: req.body.password,
        });
        let saveUser = usuario.save();
      } else {
        res.json({ message: "Usuario já cadastrado" });
      }
    });
  },
};
