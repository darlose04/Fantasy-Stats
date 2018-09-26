// putting all middleware in the directory

var Discussion = require("../models/discussion");
var Comment = require("../models/comment");

var middlewareObj = {};

middlewareObj.checkDiscussionOwnership = function(req, res, next) {
  // is user logged in?
  if (req.isAuthenticated()) {
    Discussion.findById(req.params.id, function(err, foundDiscussion) {
      if(err || !foundDiscussion) {
        req.flash("error", "Discussion not found");
        res.redirect("back");
      } else {
        // does user own discussion?
        if (foundDiscussion.author.id.equals(req.user._id)) { // use .equals: first id is mongoose id, second id is string id: == or === does not work
          next();
        } else {
          req.flash("error", "You do not have permission to do that");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
  }
}

middlewareObj.checkCommentOwnership = function(req, res, next) {
  // is user logged in?
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment._id, function(err, foundComment) {
      if (err || !foundComment) {
        req.flash("error", "Comment not found");
        res.redirect("back");
      } else {
        // does user own comment?
        if (foundComment.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", "You do not have permission to do that");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login")
  }
}

middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "You need to be logged in to do that");
  res.redirect("/login");
}