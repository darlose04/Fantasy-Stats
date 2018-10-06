var express = require("express");
var router = express.Router();
var Total = require("../models/total");

// INDEX - show totals
router.get("/", function (req, res) {
  // get the totals from the database
  Total.find({}, function(err, allTotals) {
    if(err) {
      console.log(err);
    } else {
      res.render("teams/index", {totals: allTotals});
    }
  });
});