var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    User = require("./models/user");

var PORT = process.env.PORT || 2500;

// require the routes
var discussionRoutes = require("./routes/discussions"),
  commentRoutes = require("./routes/comments"),
  indexRoutes = require("./routes/index"),
  teamRoutes = require("./routes/teams");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


// PASSPORT CONFIGURATION


app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/teams", function(req, res) {
  res.render("teams");
});

app.listen(PORT, function() {
  console.log("Fantasy Stats server has started!");
});
