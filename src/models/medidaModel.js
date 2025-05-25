
var database = require("../database/config");

function buscarUltimasMedidasPiloto() {
    instrucaoSql = `select nome, count(fkPiloto) from Votos join Piloto on fkPiloto = idPiloto group by fkPiloto order by fkPiloto;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarUltimasMedidasEquipe() {
    instrucaoSql = `select nome, count(fkEquipe) from Votos join Equipe on fkEquipe = idEquipe group by fkEquipe order by fkEquipe;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMedidasEmTempoRealPiloto() {
    instrucaoSql = `select nome, count(fkPiloto) from Votos join Piloto on fkPiloto = idPiloto group by fkPiloto order by fkPiloto;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMedidasEmTempoRealEquipe() {
    instrucaoSql = `select nome, count(fkEquipe) from Votos join Equipe on fkEquipe = idEquipe group by fkEquipe order by fkEquipe;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmIndicadores() {
    instrucaoSql = `select (select nome from Piloto join Votos on fkPiloto = idPiloto group by fkPiloto order by count(fkPiloto) desc limit 1) as 'maisVotadoP',
	   (select nome from Piloto join Votos on fkPiloto = idPiloto group by fkPiloto order by count(fkPiloto) asc limit 1) as 'menosVotadoP', 
       (select nome from Equipe join Votos on fkEquipe = idEquipe group by fkEquipe order by count(fkEquipe) desc limit 1) as 'maisVotadaE',
       (select nome from Equipe join Votos on fkEquipe = idEquipe group by fkEquipe order by count(fkEquipe) asc limit 1) as 'menosVotadaE';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidasPiloto,
    buscarUltimasMedidasEquipe,
    buscarMedidasEmTempoRealPiloto,
    buscarMedidasEmTempoRealEquipe,
    buscarMedidasEmIndicadores
}
