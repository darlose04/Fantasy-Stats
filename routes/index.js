var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// root route
router.get("/", function(req, res) {
  res.render("landing");
});

// AUTHENTICATION ROUTES

// show register form
router.get("/register", function(req, res) {
  res.render("register");
});

