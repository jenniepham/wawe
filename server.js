
var path = require('path');
var express = require('express');
var app = express();
app.use(express.static(path.resolve(__dirname, 'client')));
var port = process.env.PORT || 8080;
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  token: process.env.token,
  token_secret: process.env.token_secret,
});


app.get('/', function(request, response){
  
  response.render('index.ejs');
  
});
















app.listen(port, function(){
  
   console.log("App is currently running on port " + port);
   
});
 


