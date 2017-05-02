var customers=[];
//function Test
load();
function load(){
$.get("http://localhost:3000/fakeuser").done(function(data) {
	var fakeuser= ('<tr><td></td><td>'+data.Name+'</td><td>'+data.FirstName+'</td><td>'+data.Birth_date+'</td><td>'+data.Birth_date+'</td><td>'+data.Adress+'</td><td>'+data.Zip_code+'</td><td>'+data.Phone+'</td><td>'+data.Date_of_registration+'</td>');
	$('tbody').append(fakeuser)
})
$.get("http://localhost:3000/customers/getAll").done(function(data) {
	console.log(data)
	if(data !==null){
	 customers= JSON.parse(data)
	 console.log(customers)
	for (var i = 0; i < customers.length; i++) {
	
	var customer = customers[i];

		var ligne = $('<tr/>').data("ID",i);

		$('<td/>').html(i).appendTo(ligne);
		$('<td/>').append( $('<input class="Name"/>').val(customers[i].Name) ).appendTo(ligne);
		$('<td/>').append( $('<input class="FirstName"/>').val(customers[i].FirstName) ).appendTo(ligne);
		$('<td/>').append( $('<input class="Birth_date"/>').val(customers[i].Birth_date) ).appendTo(ligne);
		$('<td/>').append( $('<input class="City"/>').val(customers[i].City) ).appendTo(ligne);
		$('<td/>').append( $('<input class="Address"/>').val(customers[i].Address) ).appendTo(ligne);
		$('<td/>').append( $('<input class="Zip_code"/>').val(customers[i].Zip_code) ).appendTo(ligne);
		$('<td/>').append( $('<input class="Phone"/>').val(customers[i].Phone) ).appendTo(ligne);
		$('<td/>').append( $('<input class="Date_of_registration"/>').val(customers[i].Date_of_registration) ).appendTo(ligne);
		$('<td/>').html('<button class="del">X</button><button class="upd">+</button>').appendTo(ligne);

		$('table tbody').append( ligne );
		$("table").trigger("update");
	}}
return customers;
})
};

// function
function surligne(champ,err){
	if(err){
		champ.style.backgroundColor="#fba";
	}else{
		champ.style.backgroundColor="";
	}
};
function verifGender(champ){
	if(champ.value.length< 2 || champ.value.lenght > 5){
		surligne(champ, true);
		return false;
	}else {
		surligne(champ, false);
		return true;
	}
};
function verifName(champ){
	if(champ.value.length< 2 || champ.value.lenght> 25){
		surligne(champ, true);
		return false;
	}else {
		surligne(champ, false);
		return true;
	}
};
function verifFirstName(champ){
	if(champ.value.length< 2 || champ.value.lenght> 25){
		surligne(champ, true);
		return false;
	}else {
		surligne(champ, false);
		return true;
	}
};
function verifBirth_date(champ){
	if(champ.value.length< 2 || champ.value.lenght> 25){
		surligne(champ, true);
		return false;
	}else {
		surligne(champ, false);
		return true;
	}
};
function verifCity(champ){
	if(champ.value.length< 2 || champ.value.lenght> 25){
		surligne(champ, true);
		return false;
	}else {
		surligne(champ, false);
		return true;
	}
};
function verifAdress(champ){
	if(champ.value.length< 2 || champ.value.lenght> 25){
		surligne(champ, true);
		return false;
	}else {
		surligne(champ, false);
		return true;
	}
};
function verifZip_code(champ){
	if(champ.value.length< 2 || champ.value.lenght> 25){
		surligne(champ, true);
		return false;
	}else {
		surligne(champ, false);
		return false;
	}
};
function verifPhone(champ){
	if(champ.value.length< 2 || champ.value.lenght> 25){
		surligne(champ, true);
		return true;
	}else {
		surligne(champ, false);
		return false;
	}
};
function verifForm(){
	var gender= verifGender(this);
	var name= verifName(this);
	var firstname= verifFirstName(this);
	var birth_date= verifBirth_date(this);
	var adress = verifAdress(this);
	var zip= verifZip_code(this);
	var phone= verifPhone(this);
	if( gender && name && firstname && birth_date && adress && zip && phone){
		return true;
	} else {
		
		alert ("Veuillez remplir correctement tous les champs")
		return false;
	}
}
$('submit').on("click",function(event){
	verifForm()
	if(true){
		alert("Votre client viens d'être enregistrer dans la base de données"),
		$('form input').val("");
	} alert('Verifier le formulaire')
	event.preventDefault();
})
// click function
$('table').delegate('button.del', 'click', function(){

		var ligne = $(this).parent().parent();
		var ID = ligne.data('ID');

		ligne.remove();
		customers.splice(ID, 1);
		console.log( customers );
	 	var db=	JSON.stringify( customers )

		$.post({ 
	 		url:'http://localhost:3000/customers/update', 
	 		data: { 
	 		db,
	 	} 
	 }) 
		.done(function(res){
			alert(res)
		})
	});

$('table').delegate('button.upd', 'click', function(){

		var ligne = $(this).parent().parent();
		var ID = ligne.data('ID');
				console.log(customers)

console.log(ID)
		customers[ID] = {
			Name: ligne.find('.Name').val(),
			FirstName: 	ligne.find('.FirstName').val(),
			Birth_date: 	ligne.find('.Birth_date').val(),
			City: 	ligne.find('.City').val(),
			Address: 	ligne.find('.Address').val(),
			Zip_code: 	ligne.find('.Zip_code').val(),
			Phone: 	ligne.find('.Phone').val(),
			Date_of_registration: 	ligne.find('.Date_of_registration').html()
		}
		
		var db=	JSON.stringify( customers )

		$.post({ 
	 		url:'http://localhost:3000/customers/update', 
	 		data: { 
	 		db,
	 	} 
	 }) 
		.done(function(res){
			alert(res)
		})
	});




	// Tableau triable

	$(".table").tablesorter({textExtraction: function(node) {
		var val = $(node).find('input').val();
		return val ? val : $(node).text();
	}});