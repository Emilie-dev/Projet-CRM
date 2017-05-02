// Import lib
var express= require('express');
var faker= require('faker');
var fs= require('fs');
var bp = require('body-parser');
var moment= require('moment')


var now = moment()
var app=express();
// open port
var obj=[];
var json= JSON.stringify(obj);
var dbCustomers= 'customers.json';
var dbOrders = 'orders.json';
var dbProducts= 'products.json';
var data;

app.listen(3000);
app.use(bp.urlencoded({ extended: false }))
app.use(express.static('client'));

// Routes
app.get('/', function(req, res){	
 });
		
app.post('/customers', function(req, res){
		AddData(dbCustomers,req);
	res.send("okay");
});

app.post('/customers/update', function(req, res){
 	var add= req.body.db;
	UpdateData(dbCustomers, add)
 });

app.get('/customers/getAll', function(req, res){
		fs.readFile('customers.json',function read(err,data){
	 		 	if(err) throw err;
	 		 	data=data;
		 res.send(data);
	 })
 });
// app.post('/products', function(req, res){
// });
// app.update('/products', function(req, res){
// });
// app.update('/products', function(req, res){
// });
// app.post('/orders', function(req, res){
// });
// app.update('/orders', function(req, res){
// });
// app.get('/orders', function(req, res){
// });

// fake User
app.get('/fakeuser', function(req,res){
	res.json({
		FirstName: faker.name.firstName(),
		Name: faker.name.lastName(),
		Birth_date: faker.date.past(),
		Adress: faker.address.city(),
		Zip_code: faker.address.zipCode(),
		Phone: faker.phone.phoneNumber(),
		Date_of_registration: now.format('MMMM Do YYYY'),
	});
});


// function Customers
// fs.readFile sert a parcourir le fichier contenant la base client,
// fs.writeFile sert a réecrire le fichier.
function AddData(dir,req){
	var data = req.body;
	var addCustomer= {
		"Gender" : data.Gender,
	 	"Name" : data.Name,
		"FirstName" : data.FirstName,
		"Birth_date" : data.Birth_date,
		"City": data.City,
		"Zip_code": data.Zip_code,
		"Address" : data.Address,
		"Phone" : data.Phone,
		"Date_of_registration" : now.format('MMMM Do YYYY'),
	 	};
	 fs.readFile(dir,function(err,data){
	 	obj= JSON.parse(data)
	 	if(err)throw err;		
	 obj.push(addCustomer)
		json=JSON.stringify(obj)
	 fs.writeFile(dir,json, function(err){
	 	if(err) throw err;
	 });
	 })	
	}

function UpdateData(dir, add){
 	 fs.writeFile(dir,add, function(err){
	  	if(err) throw err;
	 }); 	
	
	}
// function Orders
// fs.readFile sert a parcourir le fichier contenant la base commande,
// fs.writeFile sert a réecrire le fichier.

