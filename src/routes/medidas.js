var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:id", function (req, res) {
    medidaController.buscarUltimasMedidasPiloto(req, res);
});

router.get("/ultimas/:id", function (req, res) {
    medidaController.buscarUltimasMedidasEquipe(req, res);
});

router.get("/tempo-real/:id", function (req, res) {
    medidaController.buscarMedidasEmTempoRealPiloto(req, res);
});

router.get("/tempo-real/:id", function (req, res) {
    medidaController.buscarMedidasEmTempoRealEquipe(req, res);
});

router.get("/indicadores", function (req, res) {
    medidaController.buscarMedidasEmIndicadores(req, res);
});

module.exports = router;