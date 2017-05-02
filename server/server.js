//web server
var express = require('express');
var app = express();

var momentjs = require('moment');
var faker = require('faker');
var nodefs = require('fs');
var bodyparser = require('body-parser');


app.listen(3000, function(){
	console.log('server ok');
});

//route 
app.post('/customers', function(req, res)){
res.send('hello');
});

app.post('/customers/update', function()){

}

app.post('/orders/update', function()){

}

app.post('/products/update', function()){
	
}