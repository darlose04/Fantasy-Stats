var express = require("express");
var router = express.Router();
var Team = require("../models/team");

// INDEX - show teams
router.get("/", function(req, res) {
  // get the teams from the database
  Team.find({}, function(err, allTeams) {
    if(err) {
      console.log(err);
    } else {
      res.render("teams/index", {teams: allTeams});
    }
  });

  Total.find({}, function(err, allTotals) {
    if(err) {
      console.log(err);
    } else {
      res.render("teams/index", {totals: allTotals});
    }
  });
});

// SHOW info about one team
router.get("/:id", function(req, res) {
  // find team with provided id
  Team.findById(req.params.id).exec(function(err, foundTeam) {
    if (err || !foundTeam) {
      req.flash("error", "Team not found");
      res.redirect("back");
    } else {
      console.log(foundTeam);
      // render show template with that team
      res.render("teams/show", {team: foundTeam});
    }
  });
});

module.exports = router;