console.log("Hello");

function getObject(){
	$.ajax({
		url:'/products/getAll',
		method: 'GET',
		success: function(data){
			console.log(JSON.parse(data));
			customers = JSON.parse(data);
			// affiche(d);
		}
	});

}

function delObject(nbr){
	console.log(products);
	customers.splice(nbr,1);
	console.log(products);
	

	$.ajax({
		url:'/customers/update',
		method: 'POST',
		data:{
			db: JSON.stringify(products)
		}
	});

}


$(function(){
	$("#productsTable").tablesorter();
});

var products=[];

function recept(){
	$.ajax({
		url:"/products/getAll",
		
		success : function(data){
		console.log(data);
		}
	})
	.done(function(data){
		customers=JSON.parse(data);
		// console.log(customers);
		load(customers);				
	});
}


function load(tab){
	for (i=0;i<tab.length;i++){
		}
}

$(document).ready(function(){
   recept();
});
