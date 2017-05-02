//web server
var express = require('express');
var app = express();
var momentjs = require('moment');
 //var faker = require('faker');
var nodefs = require('fs');
var bodyparser = require('body-parser');

app.listen(3000, function(){
	console.log('server ok');
});

//base de données
var TableClient = {

}


//route 
app.post('/customers', function(req, res){
res.send('hello');
});

//route post-produits
app.post('/products', function(req, res){
});

//route post-commande
app.post('/orders', function(req, res){
});

//route delete/suppr clients
app.post('/customers/delete', function(req, res){
});

// route delete/suppr produits
app.post('/products/delete', function(req, res){
});
