console.log("HelloProduits");

function getObject(){
	$.ajax({
		url:'/products/getAll',
		method: 'GET',
		success: function(data){
			console.log(JSON.parse(data));
			products = JSON.parse(data);
			// affiche(d);
		}
	});

}

function delObject(ind){
	// console.log(products);
	products.splice(ind,1);
	console.log(products);
	

	$.ajax({
		url:'/products/update',
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
		products=JSON.parse(data);
		// console.log(customers);
		load(products);				
	});
}


function load(tab){
	for (i=0;i<tab.length;i++){
		}
}

$(document).ready(function(){
   getObject();
   load(products);
});
