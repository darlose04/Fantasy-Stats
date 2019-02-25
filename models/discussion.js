var mongoose = require("mongoose");

discussionSchema = new mongoose.Schema({
  name: String,
  description: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
}, {collection: 'discussions'});

module.exports = mongoose.model("Discussion", discussionSchema);