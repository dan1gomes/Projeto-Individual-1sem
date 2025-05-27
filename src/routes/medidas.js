var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/piloto", function (req, res) {
    medidaController.buscarUltimasMedidasPiloto(req, res);
});

router.get("/ultimas/equipe", function (req, res) {
    medidaController.buscarUltimasMedidasEquipe(req, res);
});

router.get("/tempo-real/piloto", function (req, res) {
    medidaController.buscarMedidasEmTempoRealPiloto(req, res);
});

router.get("/tempo-real/equipe", function (req, res) {
    medidaController.buscarMedidasEmTempoRealEquipe(req, res);
});

router.get("/indicadores", function (req, res) {
    medidaController.buscarMedidasEmIndicadores(req, res);
});

module.exports = router;