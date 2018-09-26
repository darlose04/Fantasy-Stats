var express = require("express");
var router = express.Router({mergeParams: true});
var Discussion = require("./models/discussion");
var Comment = require("./models/comment");
var middleWare = require("../middleware");

