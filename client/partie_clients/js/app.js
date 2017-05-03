
function surligne(champ, erreur){

   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifGender(champ){

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}


function verifFirstName(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }  
}

function verifName(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }  
}



function verifCity(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }  
}

function verifAdress(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }  
}

function verifBirthdate(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }  
}

function verifZipCode(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }  
}

function verifPhoneNumber(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;

   }  
}

function verifForm(f){

   var genderOk = verifGender(f.gender);
   var firstNameOk = verifFirstName(f.firstName);
   var nameOk = verifName(f.name);
   var cityOk = verifCity(f.city);
   var addressOk = verifAdress(f.address);
   var birthDateOk = verifBirthdate(f.birthdate);
   var zipCodeOk = verifZipCode(f.zipCode);
   var phoneNumberOk = verifPhoneNumber(f.phoneNumber);

   if(genderOk && firstNameOk && nameOk && cityOk && addressOk && birthdateOk && zipCodeOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}

$("submit").on( 'click',function (event) {
   event.preventDefault();
   verifForm()
   if(true){
      alert("Votre client viens d'être enregistrer dans la base de données"),
      $('form input').val("");
   } alert('Verifier le formulaire')

})

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
