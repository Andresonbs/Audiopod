const mysql = require("mysql2");
const conexao = require("./connection.js")

function criarTabelaPodcast(con){
    const sql = "CREATE TABLE IF NOT EXISTS podcast ("+
    "id INT NOT NULL AUTO_INCREMENT, \n"+
    "titulo VARCHAR(60) NOT NULL, \n"+
    "artista VARCHAR(60) NOT NULL, \n"+
    "nomeAudio TEXT NOT NULL, \n"+
    "nomeCapa TEXT NOT NULL, \n"+
    "descricao VARCHAR(60) NOT NULL, \n"+
    "PRIMARY KEY (ID))";

    con.query(sql, function(error, results, fields){
        if(error) {
            console.log(error)
        } else {
            console.log("Tabela podcast criada com sucesso")
        }
    })
}

function criarTabelaAudiobook(con){
    const sql = "CREATE TABLE IF NOT EXISTS audiobook ("+
    "id INT NOT NULL AUTO_INCREMENT, \n"+
    "titulo VARCHAR(60) NOT NULL, \n"+
    "narrador VARCHAR(60) NOT NULL, \n"+
    "nomeAudio TEXT NOT NULL, \n"+
    "nomeCapa TEXT NOT NULL, \n"+
    "sinopse VARCHAR(60) NOT NULL, \n"+
    "PRIMARY KEY (ID))";

    con.query(sql, function(error, results, fields){
        if(error) {
            console.log(error)
        } else {
            console.log("Tabela audiobook criada com sucesso")
        }
    })
}

criarTabelaPodcast(conexao)
criarTabelaAudiobook(conexao)

module.exports = mysql