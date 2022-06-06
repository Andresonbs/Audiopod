const mysql = require('./mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors')
const conexao = require("./connection.js")
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

var app = express()
var port = 8080;


app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
    app.use(express.json({limit: '50mb', extended: true}));
    app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))
app.use(cors());
app.use(fileUpload())


app.listen(port, () => console.log(`App is listening on port ${port}!`))
//metodos de assinatura get post
app.get('/podcasts', getPodcasts)

app.post('/podcasts', postPodcast)

app.get('/audiobook', getAudiobooks)

app.post('/audiobook', postAudiobook)

app.get('/sPodcasts', searchPodcasts)

app.get('/sAudiobooks', searchAudiobooks)

app.post('/test', function(req, res) {
    console.log('POST /')
    console.log(req.body.title)
    res.send('http:://google.com')
  })

//app.get('/search', getSearch)

//metodos completos
async function searchPodcasts(req,res) {
    var s = req.query.q
    console.log(s)
    var sql = 'SELECT * FROM podcast WHERE titulo LIKE "%'+s+'%" OR artista LIKE "%'+s+'%"'
    console.log(sql)
    conexao.query(sql, function(error, results, fields){
        if(error) {
            res.status(400).send()
        } else {
            var list = []
            results.forEach(function(result){
                list.push({
                    name: result.titulo,
                    artist: result.artista,
                    img: result.nomeCapa,
                    src: result.nomeAudio,
                    info: result.descricao
                });
            })
            console.log(JSON.stringify(list))
            res.status(200).send(JSON.stringify(list))
        }
    })
}
async function getPodcasts(req,res) {
    var sql = "SELECT * FROM podcast"
    conexao.query(sql, function(error, results, fields){
        if(error) {
            res.status(400).send()
        } else {
            var list = []
            results.forEach(function(result){
                list.push({
                    name: result.titulo,
                    artist: result.artista,
                    img: result.nomeCapa,
                    src: result.nomeAudio,
                    info: result.descricao
                });
            })
            //console.log(JSON.stringify(list))
            res.status(200).send(JSON.stringify(list))
        }
    })
}

function postPodcast(req, res) {
    let podcast = req.body
    let audio = req.files.filename
    console.log(audio)
    let capa = req.files.filename2
    console.log(capa)
    let imageUploadPath = __dirname + '/pImages/' + capa.name
    let audioUploadPath = __dirname + '/podcasts/' + audio.name

    audio.mv(audioUploadPath)
    capa.mv(imageUploadPath)

    var sql = "INSERT INTO podcast(titulo, artista, nomeAudio, nomeCapa, descricao) VALUES (?, ?, ?, ?, ?)"
    var values = [podcast.title, podcast.artist, audioUploadPath, imageUploadPath, podcast.descricao]
    console.log(values)

    conexao.query(sql, values, function(error, results, fields){
        if(error) {
            res.status(400).send("Não foi possivel inserir o podcast")
        } else {
            res.status(201).send(podcast);
        }
    })
}

async function getAudiobooks(req,res) {
    var sql = "SELECT * FROM audiobook"
    conexao.query(sql, function(error, results, fields){
        if(error) {
            res.status(400).send()
        } else {
            var list = []
            results.forEach(function(result){
                list.push({
                    name: result.titulo,
                    artist: result.narrador,
                    img: result.nomeCapa,
                    src: result.nomeAudio,
                    info: result.sinopse
                });
            })
            //console.log(JSON.stringify(list))
            res.status(200).send(JSON.stringify(list))
        }
    })
}
async function searchAudiobooks(req,res) {
    var s = req.query.q
    console.log(s)
    var sql = 'SELECT * FROM audiobook WHERE titulo LIKE "%'+s+'%" OR narrador LIKE "%'+s+'%"'
    console.log(sql)
    conexao.query(sql, function(error, results, fields){
        if(error) {
            res.status(400).send()
        } else {
            var list = []
            results.forEach(function(result){
                list.push({
                    name: result.titulo,
                    artist: result.narrador,
                    img: result.nomeCapa,
                    src: result.nomeAudio,
                    info: result.sinopse
                });
            })
            console.log(JSON.stringify(list))
            res.status(200).send(JSON.stringify(list))
        }
    })
}

function postAudiobook(req, res) {
    let audiobook = req.body
    let audio = req.files.filename
    console.log(audio)
    let capa = req.files.filename2
    console.log(capa)
    let imageUploadPath = __dirname + '/aImages/' + capa.name
    let audioUploadPath = __dirname + '/audiobooks/' + audio.name

    audio.mv(audioUploadPath)
    capa.mv(imageUploadPath)

    var sql = "INSERT INTO audiobook(titulo, narrador, nomeAudio, nomeCapa, sinopse) VALUES (?, ?, ?, ?, ?)"
    var values = [audiobook.title, audiobook.artist, audioUploadPath, imageUploadPath, audiobook.descricao]
    console.log(values)
    console.log()

    conexao.query(sql, values, function(error, results, fields){
        if(error) {
            res.status(400).send("Não foi possivel inserir o audiobook")
        } else {
            res.status(201).send(audiobook);
        }
    })
}