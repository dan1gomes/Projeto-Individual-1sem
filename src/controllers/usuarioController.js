var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {
                    res.json({
                        id: resultadoAutenticar[0].idUsuario,
                        email: resultadoAutenticar[0].email,
                        nome: resultadoAutenticar[0].nome

                    });
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login");
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function max(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPiloto = req.body.fkPilotoServer;

        usuarioModel.max(fkUsuario, fkPiloto)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
}
function leclerc(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPiloto = req.body.fkPilotoServer;

        usuarioModel.leclerc(fkUsuario, fkPiloto)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
}
function norris(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPiloto = req.body.fkPilotoServer;

        usuarioModel.norris(fkUsuario, fkPiloto)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
}
function lewis(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPiloto = req.body.fkPilotoServer;

        usuarioModel.lewis(fkUsuario, fkPiloto)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
}
function piastri(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPiloto = req.body.fkPilotoServer;

        usuarioModel.piastri(fkUsuario, fkPiloto)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
}
function bortoleto(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPiloto = req.body.fkPilotoServer;

        usuarioModel.bortoleto(fkUsuario, fkPiloto)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
}
function ferrari(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkEquipe = req.body.fkEquipeServer;

        usuarioModel.ferrari(fkUsuario, fkEquipe)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
}
function maclaren(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkEquipe = req.body.fkEquipeServer;

        usuarioModel.maclaren(fkUsuario, fkEquipe)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
}
function mercedes(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkEquipe = req.body.fkEquipeServer;

        usuarioModel.mercedes(fkUsuario, fkEquipe)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
}
function redbull(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkEquipe = req.body.fkEquipeServer;

        usuarioModel.redbull(fkUsuario, fkEquipe)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
}

module.exports = {
    autenticar,
    cadastrar,
    max,
    leclerc,
    norris,
    lewis,
    piastri,
    bortoleto,
    ferrari,
    maclaren,
    mercedes,
    redbull
}