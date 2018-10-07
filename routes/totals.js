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
      res.render("totals/index", {totals: allTotals});
    }
  });
});

// SHOW info about one team
router.get("/:id", function (req, res) {
  // find total with provided id
  Total.findById(req.params.id).exec(function (err, foundTotal) {
    if (err || !foundTotal) {
      req.flash("error", "Total not found");
      res.redirect("back");
    } else {
      console.log(foundTotal);
      // render show template with that total
      res.render("totals/show", { total: foundTotal });
    }
  });
});

module.exports = router;