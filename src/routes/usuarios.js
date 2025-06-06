var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// .post é para inserir e .get é para pegar os dados
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/max", function (req, res) {
    usuarioController.max(req, res);
});

router.post("/leclerc", function (req, res) {
    usuarioController.leclerc(req, res);
});

router.post("/norris", function (req, res) {
    usuarioController.norris(req, res);
});

router.post("/lewis", function (req, res) {
    usuarioController.lewis(req, res);
});

router.post("/piastri", function (req, res) {
    usuarioController.piastri(req, res);
});

router.post("/bortoleto", function (req, res) {
    usuarioController.bortoleto(req, res);
});

router.post("/ferrari", function (req, res) {
    usuarioController.ferrari(req, res);
});

router.post("/maclaren", function (req, res) {
    usuarioController.maclaren(req, res);
});

router.post("/mercedes", function (req, res) {
    usuarioController.mercedes(req, res);
});

router.post("/redbull", function (req, res) {
    usuarioController.redbull(req, res);
});

module.exports = router;