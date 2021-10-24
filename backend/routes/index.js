var express = require('express');
var router = express.Router();
const CoworkController = require('../controllers/cowork.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/coworksInPriceRange", CoworkController.getCoworksInPriceRange);
router.get("/coworksInDateRange", CoworkController.getCoworksInDateRange);
router.get("/coworksByRecommendations", CoworkController.getCoworksInOrderByRecommendation);

module.exports = router;
