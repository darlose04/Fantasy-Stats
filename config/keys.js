module.exports = {
  MongoURI: `mongodb://${process.env.USERNAME}:${process.env.PASS}@season-stats-shard-00-00-lmohh.mongodb.net:27017,season-stats-shard-00-01-lmohh.mongodb.net:27017,season-stats-shard-00-02-lmohh.mongodb.net:27017/test?ssl=true&replicaSet=Season-Stats-shard-0&authSource=admin&retryWrites=true`
}

