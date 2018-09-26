var express = require("express");
var router = express.Router();
var Discussion = require("../models/discussion");
var middleware = require("../middleware");

// INDEX - show discussions
router.get("/", function(req, res) {
  // get the discussions from the database
  Discussion.find({}, function(err, allDiscussions) {
    if (err) {
      console.log(err);
    } else {
      res.render("discussions/index", { discussions: allDiscussions});
    }
  });
});

// CREATE - add a new discussion to the database
router.post("/", middleware.isLoggedIn, function(req, res) {
  // get data from form and add to the discussions array
  var name = req.body.name;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var newDiscussion = {
    name: name,
    description: desc,
    author: author
  };
  // create new discussion and save to the db
  Discussion.create(newDiscussion, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      // redirect back to discussion page
      console.log(newlyCreated);
      res.redirect("/discussions");
    }
  });
});

// NEW - show form to create a new discussion
router.get("/new", middleware.isLoggedIn, function(req, res) {
  res.render("discussions/new");
});

