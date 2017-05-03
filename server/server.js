//--Web server
var express = require('express');
var app = express();

//var momentjs = require('moment');
var faker = require('faker/locale/fr');
var nodefs = require('fs');
//var bodyparser = require('body-parser');


//var momentjs = require('moment');
var faker = require('faker');
var nodefs = require('fs');
var bodyparser = require('body-parser');
var expressValidator = require('express-validator');







//-- Middleware

app.use(express.static(__dirname + '/../client/'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(expressValidator());




//--Route 


app.get('/customers', function(req, res){
	// Fake User
	var fakeCustomers = {
		"gender": faker.name.prefix(),
		"firstName": faker.name.firstName(),
		"name": faker.name.lastName(),
	 	"city": faker.address.city(),
	 	"address": faker.address.streetAddress(),
	 	"birthdate": faker.date.past(),
	 	"registrationDate": new Date().getTime(),
	 	"zipCode": faker.address.zipCode(),
	 	"phoneNumber": faker.phone.phoneNumber(),

	};

	res.send(fakeCustomers);
});

//route post-produits
app.post('/products', function(req, res){
});



app.post('/customers', function(req, res){
	//.log(req.body);
	AddData(dbCustomers, req);
	//res.status(200).end();
});

//routeGetClients
app.get('/customer/getAll', function(req, res){
	fs.readFile('customers.json',function read(err,data){
	 		 	if(err) throw err;
	 		 	data=data;
		 res.send(data);
	 });
});

app.post('/customers/update', function(req, res){

	var add= req.body.db;
	UpdateData(dbCustomers, add);
	

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

app.listen(3000, function(){
	console.log('server ok');
});
// function Customers
// fs.readFile sert a parcourir le fichier contenant la base client,
// fs.writeFile sert a réecrire le fichier.
function AddData(dir,req){
	
	req.checkBody('gender', 'Invalid gender').notEmpty();
	req.checkBody('name', 'Invalid name').notEmpty();
	req.checkBody('firstname', 'Invalid firstname').notEmpty();
	req.checkBody('birthdate', 'Invalid birthdate').notEmpty();
	req.checkBody('city', 'Invalid city').notEmpty();
	req.checkBody('zipCode', 'Invalid zipCode').notEmpty();
	req.checkBody('address', 'Invalid address').notEmpty();
	req.checkBody('phoneNumber', 'Invalid phoneNumber').notEmpty();


	var errors = req.validationErrors();
	if (errors)
	{
		console.log(errors);
	}
	else 
	{
		var data = req.body;

		var addCustomer= 
		{
			"gender" : data.gender,
		 	"name" : data.name,
			"firstName" : data.firstName,
			"birthdate" : data.birthdate,
			"city": data.city,
			"zipCode": data.zipCode,
			"address" : data.address,
			"phoneNumber" : data.phoneNumber,
			"registrationDate" : now.format('MMMM Do YYYY'),
		 };
		nodefs.readFile(dir,function(err,data)
		{
		 	obj= JSON.parse(data);
		 	if(err)throw err;		
		 	obj.push(addCustomer);
			json=JSON.stringify(obj);
		 	nodefs.writeFile(dir,json, function(err)
		 	{
		 		if(err) throw err;
		 	});
		});
	}

}

function UpdateData(dir, add){
 	 nodefs.writeFile(dir,add, function(err){
	  	if(err) throw err;
	 }); 	
	
	}


