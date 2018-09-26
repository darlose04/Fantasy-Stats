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

// SHOW - shows more info about one discussion
router.get("/:id", function(req, res) {
  //find the discussion with the provided ID
  Discussion.findById(req.params.id).populate("comments").exec(function(err, foundDiscussion) {
    if (err || !foundDiscussion) { // this OR statement prevents someone from changing the url id and crashing the app
      req.flash("error", "Discussion not found");
      res.redirect("back");
    } else {
      console.log(foundDiscussion);
      // render show template with that discussion
      res.render("discussions/show", { discussion: foundDiscussion});
    }
  });
});

// Don't think I will need to use an edit or update route, just a destroy route

// DESTROY discussion
router.delete("/:id", middleware.checkDiscussionOwnership, function(req, res) {
  Discussion.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      res.redirect("/discussions");
    } else {
      res.redirect("/discussions");
    }
  });
});

module.exports = router;