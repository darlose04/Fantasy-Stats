var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    User = require("./models/user");



app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/teams", function(req, res) {
  res.render("teams");
});

app.listen(2500, function() {
  console.log("Fantasy Stats server has started!");
});
