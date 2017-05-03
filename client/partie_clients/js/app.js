console.log("Hello");

$(function(){
	$("#customerTable").tablesorter();
});

var customers=[];

function recept(){
	$.ajax({
		url:"http://192.168.1.152/customers/",
		data: {
		task: "get",
		key: "customers",
		},
		success : function(data){
		console.log(data)
		}
	})
	.done(function(data){
		customers=JSON.parse(data);
		console.log(customers);
		load(customers);				
	})
};

function load(tab){
	for (i=0;i<tab.length;i++){
		
};
