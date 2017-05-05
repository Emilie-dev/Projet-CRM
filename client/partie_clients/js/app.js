console.log("Hello");



function surligne(champ, erreur){

   if(erreur){
      champ.style.backgroundColor = "#fba";
   }
   else{
      champ.style.backgroundColor = "";
   }
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



function verifForm(event){
   var errors= {};

   if(validator.isEmpty("" + $('#gender').val())){
      errors.gender ="rater";
   }


   

   return {errors: errors, isValid : $.isEmptyObject(errors)}; 


}

$("button").on( 'click',function (event) {

   var resultValid =  verifForm();
   console.log(resultValid);
   if(! resultValid.isValid){
      event.preventDefault();
      //afficher les message derreur
   }

});


function getObject(){
   $.ajax({
      url:'/customer/getAll',
      method: 'GET',
      success: function(data){
         console.log(JSON.parse(data));
         customers = JSON.parse(data);
         affiche(d);
      }
   });

}

function delObject(nbr){
   console.log(customers);
   customers.splice(nbr,1);
   console.log(customers);
   

   $.ajax({
      url:'/customers/update',
      method: 'POST',
      data:{
         db: JSON.stringify(customers)
      }

   }).done(function(data) {
      console.log(data);
      if ( data ) {
         alert("Success!");
      }else{
         alert("Error!");      
      }
   });


}


$(function(){
   $("#customerTable").tablesorter();
});





var customers=[];

function recept(){
   $.ajax({
      url:"/customer/getAll",
      
      success : function(data){

      console.log(data);
      }
   })
   .done(function(data){
      customers=JSON.parse(data);
      console.log(customers);
      load(customers);           
   });
}


function load(tab){

   $('tbody').html(' ');

	for (i=0;i<tab.length;i++){

		$('tbody').append('<tr><td>'+tab[i].gender+'</td><td>'+tab[i].firstName+'</td><td>'+tab[i].name+'</td><td>'+tab[i].city+'</td><td>'+tab[i].address+'</td><td>'+tab[i].birthdate+'</td><td>'+tab[i].registrationDate+'</td><td>'+tab[i].zipCode+'</td><td>'+tab[i].phoneNumber+'</td><td><img src="../res/poubelle.png" class="sup" data-ind="'+i+'"/></td><td><img src="../res/modifier.png" class="edt" data-ind="'+i+'"></img></td></tr>');
		}

      $('.sup').on('click', function(){
         var indAsup= $(this).data('ind');
         delObject(indAsup);
         recept();
         

      });	

}

$(document).ready(function(){
   recept();
});
