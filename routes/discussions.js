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

