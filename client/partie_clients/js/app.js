var clientArr = [];


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



function getObject(){
	$.ajax({
		url:'/customer/getAll',
		method: 'GET',
		success: function(data){
			console.log(JSON.parse(data));
			clientArr = JSON.parse(data);
			// affiche(d);
		}
	});

}

function delObject(nbr){
	console.log(clientArr);
	clientArr.splice(nbr,1);
	console.log(clientArr);
	

	$.ajax({
		url:'/customers/update',
		method: 'POST',
		data:{
			db: JSON.stringify(clientArr)
		}
	});

}

$(function(){
  $("#customerTable").tablesorter();
});



