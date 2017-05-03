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


//app.use(bp.urlencoded({ extended: false }));
//app.use(expressValidator());


app.use(express.static(__dirname + '/../client/'));
app.use(bodyparser.urlencoded({ extended: false }));


var obj;
var orders;
var products;
var json= JSON.stringify(obj);
var dbCustomers= 'customers.json';
var dbOrders = 'orders.json';
var dbProducts= 'products.json';






app.use(express.static(__dirname + '/../client/'));
app.use(bodyparser.urlencoded({ extended: false }));
//app.use(expressValidator());






//app.use(app.router);




//--route pour customers 











//--Route 



app.post('/customers/fake', function(req, res){

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


app.post('/customers', function(req, res){
	AddData(dbCustomers, req);

});

app.get('/customer/getAll', function(req, res){
	nodefs.readFile('customers.json',function read(err,data){
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
//route produits
app.post('/products', function(req, res){
	AddDataProducts(dbProducts,req)
});


app.get('/products/getAll', function(req, res){
	nodefs.readFile('products.json',function read(err,data){
	 		 	if(err) throw err;
	 		 	data=data;
		 res.send(data);
	 });
});

app.post('/products/update', function(){
	var add= req.body.db;
	UpdateData(dbProduct, add);

});

//route orders
app.post('/orders', function(req, res){
	AddDataOrders(dbOrders,req);
});

app.get('/orders/getAll', function(req, res){
	nodefs.readFile('orders.json',function read(err,data){
	 		 	if(err) throw err;
	 		 	data=data;
		 res.send(data);
	 });
});

app.post('/orders/update', function(req, res){
	var add= req.body.db;
	UpdateData(dbOrders, add);
});

// verificator express
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


		



		

		

	}
}
function AddDataOrders(dir,req){
	var data = req.body;
	var addOrders= {
		"customer" : data.customer,
	 	"product" : data.product,
		"amount" : data.amount,
		"price" : data.price,
		"reduction": data.reduction,
		"shipping": data.shipping,
		"TTC" : data.TTC,
		"TVA" : data.TVA,
		"deliveryAddress" : data.deliveryAddress,
		"billingAddress" : data.billingAddress,
		"date" : data.date,
	 	};
	 nodefs.readFile(dir,function(err,data){

	 	orders= JSON.parse(data);
	 	if(err)throw err;		
	 orders.push(addOrders);
		json=JSON.stringify(orders);
	 nodefs.writeFile(dir,json, function(err){
	 	if(err) throw err;
	 });
	 });
}
function AddDataProducts(dir,req){
	var data = req.body;
	var addProducts= {
		"name" : data.name,
	 	"price" : data.price,
		"stock" : data.stock,
		"place" : data.place,
		"description": data.description,
		"height": data.height,
		"weight" : data.weight,
		"ref" : data.ref,
	 	};
	 nodefs.readFile(dir,function(err,data){

	 

	 	products= JSON.parse(data);
	 	if(err)throw err;		
	 product.push(addProducts);
		json=JSON.stringify(products);
	 nodefs.writeFile(dir,json, function(err){
	 	if(err) throw err;
	 });
	 });
	}

function UpdateData(dir, add){
 	 nodefs.writeFile(dir,add, function(err){
	  	if(err) throw err;
	 }); 	
	
	}

