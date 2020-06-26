// app.js

var express = require('express') ;
var app = express() ;
var port = 8888 ;
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.send('Bonjour tout le monde') ;
}) ;

app.get('/page:num', function(req, res){
    res.send('Ceci est la page '+req.params.num) ;
}) ;

app.get('/testpost', function(req, res){
    res.send('<form action="/testpost-end" method="post" class="form-example"><div class="form-example"><label for="first_name">Enter your name: </label><input type="text" name="first_name" id="first_name" required></div><div class="form-example"><label for="last_name">Enter your email: </label><input type="last_name" name="last_name" id="last_name" required></div><div class="form-example"><input type="submit" value="Subscribe!"></div></form>');
})

app.post('/testpost-end', function(req, res, next){
    console.log(req.body.first_name); // req.body contains the parsed body of the request.
    
});

app.listen(port, function(){
    console.log('Le serveur fonctionne sur le port '+port) ;
}) ;
