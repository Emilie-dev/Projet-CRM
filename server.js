var express = require('express');
var app = express();

app.post('/customers', function(req, res){
res.send('hello');
});
app.listen(3000, function(){
	console.log('server ok');
});