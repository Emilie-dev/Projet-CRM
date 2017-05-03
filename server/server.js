//--Web server
var express = require('express');
var app = express();


var momentjs = require('moment');
var faker = require('faker/locale/fr');
var nodefs = require('fs');
var bodyparser = require('body-parser');
var expressValidator = require('express-validator');




app.listen(3000, function(){
	console.log('server ok');
});





//-- Middleware


app.use(express.static(__dirname + '/../client/'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(expressValidator());





var obj=[];
var json= JSON.stringify(obj);
var dbCustomers= 'customers.json';
var dbOrders = 'orders.json';
var dbProducts= 'products.json';







//app.use(app.router);





>>>>>>> 5ca357739d8abf324322fbcf59ed7df10db9c859




//--Route 


app.get('/customers', function(req, res){

// Fake User
var fakeCustomers = {
	"gender": faker.name.prefix(),
	"firstname": faker.name.firstName(),
	"lastname": faker.name.lastName(),
 	"city": faker.address.city(),
 	"address": faker.address.streetAddress(),
 	"birthdate": faker.date.past(),
 	"registrationDate": Math.round(new Date().getTime()/1000.0),
 	"zipCode": faker.address.zipCode(),
 	"phoneNumber": faker.phone.phoneNumber(),

};
res.send(fakeCustomers);
});


//route post-produits
app.post('/products', function(req, res){
});




app.post('/customers', function(req, res){
	AddData(dbCustomers, req);

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

	var add= req.body.bodyparser;

	UpdateData(dbCustomers, add);
	

	res.send('/customers/update');

});


//routeGetProduit
app.get('/products/getAll', function(req, res){
	res.send('/products/getAll');
});

//route post-produits
app.post('/products', function(req, res){
	res.send('/products');
});



app.post('/products/update', function(){


});
// route update produits
app.post('/products/update', function(req, res){

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

// route update commandes
app.post('/orders/update', function(req, res){
	res.send('/orders/update');
});


//route delete commandes
app.post('/orders/delete', function(req, res){
	res.send('/orders/delete');
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

	var data = req.body;
	var addCustomer= {
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
	 nodefs.readFile(dir,function(err,data){

	 

	 	obj= JSON.parse(data);
	 	if(err)throw err;		
	 obj.push(addCustomer);
		json=JSON.stringify(obj);
	 nodefs.writeFile(dir,json, function(err){
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

