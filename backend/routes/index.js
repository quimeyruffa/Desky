var express = require('express');
const mongoose = require("mongoose");
var router = express.Router();
const CoworkController = require('../controllers/cowork.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/coworksInPriceRange", CoworkController.getCoworksInPriceRange);
router.get("/coworksInDateRange", CoworkController.getCoworksInDateRange);
router.get("/coworksByRecommendations", CoworkController.getCoworksInOrderByRecommendation);
router.get("/coworks", CoworkController.getAllCoworks);

module.exports = router;
