var express = require("express");
var router = express.Router({mergeParams: true});
var Discussion = require("./models/discussion");
var Comment = require("./models/comment");
var middleWare = require("../middleware");

// COMMENT ROUTES

// CREATE comments
router.post("/", middleWare.isLoggedIn, function(req, res) {
  // look up discussion using id
  Discussion.findById(req.params.id, function(err, discussion) {
    if(err) {
      console.log(err);
      res.redirect("/discussions");
    } else {
      console.log(req.body.comment);
      // create new comment
      Comment.create(req.body.comment, function(err, coment) {
        if(err) {
          req.flash("error", "Something went wrong");
          console.log(err);
        } else {
          // add username and id to comment
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          // save comment
          comment.save();
          // pushes comment into database and saves it
          // then redirects back to the chat page
          discussion.comments.push(comment);
          discussion.save();
          req.flash("success", "Successfully added comment");
          res.redirect("/discussions/" + discussion._id);
        }
      });
    }
  });
});