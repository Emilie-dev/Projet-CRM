//web server
var express = require('express');
var app = express();
//var momentjs = require('moment');
var faker = require('faker/locale/fr');
var nodefs = require('fs');
//var bodyparser = require('body-parser');

app.listen(3000, function(){
	console.log('server ok');
});

//route 
app.get('/customers', function(req, res){
// Fake User
var fakeCustomers = {
	"gender": faker.name.prefix(),
	"firstname": faker.name.firstName(),
	"lastname": faker.name.lastName(),
 	"city": faker.address.city(),
 	"address": faker.address.streetAddress(),
 	"birthdate": faker.date.past(),
 	"registrationDate": "",
 	"zipCode": faker.address.zipCode(),
 	"phoneNumber": faker.phone.phoneNumber(),
};
res.send(fakeCustomers);
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

app.post('/customers/update', function(){

});

app.post('/orders/update', function(){

});

app.post('/products/update', function(){
	
});




