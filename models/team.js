var mongoose = require("mongoose");

var teamSchema = new mongoose.Schema({
  name: String,
  data: [
    {
      WEEK: String,
      AVG: Number,
      R: Number,
      HR: Number,
      RBI: Number,
      SB: Number,
      OPS: Number,
      IP: Number,
      SV: Number,
      K: Number,
      ERA: Number,
      WHIP: Number,
      QS: Number
    }
  ]
});

module.exports = mongoose.model("Team", teamSchema);
