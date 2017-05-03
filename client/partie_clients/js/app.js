
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

// Supprimez un article

$("").click(function() {
   
   var delete = $(this).data('id');
   
   console.log(delete);
   
   $.ajax({  
      url:'http://192.168.1.152/update/update/',
      data: {
         _id: delete,
      },
   });   
});

// Modifier un article

$("").click(function(){

   var edit = $(this).data('id');      
   
   console.log(edit);

   $.ajax({
      url:'http://192.168.1.152/update',
      data: {
         task: 'update',
         _id: edit,
         value: JSON.stringify( {"":, "":} ),
      }
   });
});
};