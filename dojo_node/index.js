//console.log("Olá mundo");

var express = require('express');
var app = express();
app.set('view engine','ejs'); 
app.use(express.static('assets'));


app.get('/', function(req,res){ 
    // estamos usando o método get e criando uma rota para nossa aplicação 
    res.render("index"); 
    // informamos como postamos a resposta da nossa requisição
});

app.get('/sobre', function(req,res){ 
    // estamos usando o método get e criando uma rota para nossa aplicação 
    res.render("sobre"); 
    // informamos como postamos a resposta da nossa requisição
});

app.get('/eventos', function(req,res){ 
    // estamos usando o método get e criando uma rota para nossa aplicação 
    res.render("eventos"); 
    // informamos como postamos a resposta da nossa requisição
});



app.listen(3000,function(){ 
    console.log("servidor rodando");
});