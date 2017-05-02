//web server
var express = require('express');
var app = express();
var momentjs = require('moment');
 //var faker = require('faker');
var nodefs = require('fs');
var bodyparser = require('body-parser');
var expressValidator = require('express-validator');


app.listen(3000);

//route 
app.post('/customers', function(req, res){
	res.send('hello');
});

//routeGetClients
app.get('/customer/getAll', function(req, res){
	res.send('/getClient');
});

app.post('/customers/update', function(){
	res.send('/customers/update');
});

//route delete/suppr clients
app.post('/customers/delete', function(req, res){
	res.send('/customers/delete');
});

//routeGetProduit
app.get('/products/getAll', function(req, res){
	res.send('/products/getAll');
});

//route post-produits
app.post('/products', function(req, res){
	res.send('/products');
});

// route delete/suppr produits
app.post('/products/delete', function(req, res){
	res.send('/products/delete');
});

app.post('/products/update', function(){
	res.send('/products/update');
});

//route post-commande
app.post('/orders', function(req, res){
	res.send('/orders');
});

//routeGetCommandes
app.get('/orders/getAll', function(req, res){
	res.send('/orders/getAll');
});

app.post('/orders/update', function(){
	res.send('/orders/update');
});


















