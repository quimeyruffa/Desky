var express = require('express');
const mongoose = require("mongoose");
var router = express.Router();
const OficinaController = require('../controllers/oficina.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/oficinasInPriceRange", OficinaController.getCoworksInPriceRange);
router.get("/oficinasInDateRange", OficinaController.getCoworksInDateRange);
router.get("/oficinasByRecommendations", OficinaController.getCoworksInOrderByRecommendation);
router.get("/oficinas", OficinaController.getAllCoworks);

module.exports = router;
