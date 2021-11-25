var express = require('express');
const mongoose = require("mongoose");
var router = express.Router();
const OficinaController = require('../controllers/oficina.controller');
const UserController = require('../controllers/user.controller');
const CoworkController = require('../controllers/cowork.controller');

const PaymentController = require("../controllers/mp.controller");
const PaymentService = require("../services/mp.service");
const PaymentInstance = new PaymentController(new PaymentService());

const userRoute = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/oficinasInPriceRange", OficinaController.getOficinasInPriceRange);
router.get("/oficinasInDateRange", OficinaController.getOficinasInDateRange);
router.get("/oficinasByRecommendations", OficinaController.getOficinasInOrderByRecommendation);
router.get("/oficinas", OficinaController.getAllOficinas);
router.post("/login", UserController.getUser);
router.post("/pagar", (req, res) =>
  PaymentInstance.getMercadoPagoLink(req, res)
);
router.get("/cowork", CoworkController.getCowork);

module.exports = router;
