// app.js

var express = require('express') ;
var app = express() ;
var port = 8082 ;
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var fs = require('fs'); 
var http = require('http');  
var url = require('url');  
var qs = require('querystring');



// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//GET pages

app.get('/', function(req, res){
  res.send('This is a test message !') ;
}) ;

app.get('/index.html', function(req, res){
    var path = url.parse(req.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            res.writeHead(404);  
            res.write(error);  
            res.end();  
        } else {  
            res.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
            res.write(data);  
            res.end();  
        }  
    });  
});

app.get('/testpost', function(req, res){
    res.send('<form action="/testpost-end" method="post" class="form-example"><div class="form-example"><label for="first_name">Enter your name: </label><input type="text" name="first_name" id="first_name" required></div><div class="form-example"><label for="last_name">Enter your email: </label><input type="last_name" name="last_name" id="last_name" required></div><div class="form-example"><input type="submit" value="Subscribe!"></div></form>');
});

//load css file

app.get('/assets/css/style.css', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'text/css'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

//end load css file

// load js file

app.get('/assets/js/script-test.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            const { spawn } = require('child_process');
            const process = spawn('python', ['./script-test.py']);
            process.stdout.on('data', (data) => {
                console.log(data.toString());
            });

            response.end();         
        }  
    });  
     
});

app.get('/Blockly/blockly_compressed.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/Blockly/blocks_compressed.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/Blockly/msg/js/fr.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/Blockly/javascript_compressed.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/assets/js/oXHR.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/assets/js/blockly-set-up.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/assets/js/ihm.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/assets/js/upload.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/assets/js/blocks/Area.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});


app.get('/assets/js/blocks/copernicus.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/assets/js/blocks/display.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/assets/js/blocks/file-manager.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/assets/js/blocks/Thematic.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/assets/js/script-ajax.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

app.get('/assets/js/script-ajax-copier.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'application/javascript'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

//end load js file

//load png file

app.get('/assets/img/copernicus_logo.png', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            response.writeHead(200, {  
                'Content-Type': 'image/png'
            });  
            response.write(data);  
            response.end();         
        }  
    });  
     
});

//end load png file

//end GET pages

//POST pages

app.post('/testpost-end', function(req, res, next){
    console.log(req.body.first_name); // req.body contains the parsed body of the request.
});

app.post('/assets/js/script-copier.js', function(request, response, next){
    /*
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
        // send your xhr response here
        console.log("xhr");
        //console.log(req.body.name); // req.body contains the parsed body of the request.
    } else {
        // send your normal response here
        console.log("normal");
    }
    */

   var path = url.parse(request.url).pathname; 
   fs.readFile(__dirname + path, function(error, data) {  
       if (error) {  
           response.writeHead(404);  
           response.write(error);  
           response.end();  
       } else {
            var fileName = request.body.name;
            var fileContent = request.body.content;

            console.log(fileName + ' ' + fileContent);

           const { spawn } = require('child_process');
           const process = spawn('python', ['./assets/python/test-arg.py ', fileName, fileContent]);
           process.stdout.on('data', (data) => {
               console.log(data.toString());
           });

           response.end();         
       }  
   });  

    //console.log(req.body.name);
});

//end POST pages

app.listen(port, function(){
    console.log('Le serveur fonctionne sur le port '+ port) ;
}) ;

//---------------------------------------------------------------------------------------------------------------

