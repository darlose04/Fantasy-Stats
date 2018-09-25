var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var teams = [
  {
    name: "YABO CITY",
    image:
      "https://www.baseballprospectus.com/wp-content/uploads/2018/01/mlb-baseball.jpeg"
  },
  {
    name: "Bryce Bryce Baby",
    image:
      "https://www.baseballprospectus.com/wp-content/uploads/2018/01/mlb-baseball.jpeg"
  },
  {
    name: "Yu Eaton Dickie",
    image:
      "https://www.baseballprospectus.com/wp-content/uploads/2018/01/mlb-baseball.jpeg"
  },
  {
    name: "Disabled List",
    image:
      "https://www.baseballprospectus.com/wp-content/uploads/2018/01/mlb-baseball.jpeg"
  }
]

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/teams", function(req, res) {
  res.render("teams", {teams: teams});
});

app.listen(2500, function() {
  console.log("Fantasy Stats server has started!");
});