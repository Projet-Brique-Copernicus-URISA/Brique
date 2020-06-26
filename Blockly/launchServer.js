    var http = require('http');  
    var url = require('url');  
    var fs = require('fs');  
    var qs = require('querystring');
    var bodyParser = require('body-parser');
    const express = require('express');
    

    //store the express in a variable 
    var app = express();

    //configure body-parser for express
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());


    var server = http.createServer(function(request, response) {  
        var path = url.parse(request.url).pathname;  
        switch (path) {  

            case '/assets/js/script-copier.js':
                fs.readFile(__dirname + path, function(error, data) {  
                    if (error) {  
                        response.writeHead(404);  
                        response.write(error);  
                        response.end();  
                    } else {  
                        
                    }  
                });  
            break;    

            case '/assets/js/script-test.js':
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
            break;

            case '/':  
                response.writeHead(200, {  
                    'Content-Type': 'text/plain'  
                });  
                response.write("This is Test Message !!!");  
                response.end();  
            break;  
                
            case '/index.html':  
                fs.readFile(__dirname + path, function(error, data) {  
                    if (error) {  
                        response.writeHead(404);  
                        response.write(error);  
                        response.end();  
                    } else {  
                        response.writeHead(200, {  
                            'Content-Type': 'text/html'  
                        });  
                        response.write(data);  
                        response.end();  
                    }  
                });  
            break; 
              
 

            default:  
                response.writeHead(404);  
                response.write("opps this doesn't exist - 404 !");  
                response.end();  
            break;  
        }  
    });  

server.listen(8082);  

/*
//allow express to access our html (index.html) file
app.get('/index.html', function(req, res) {
        res.sendFile(__dirname + "/" + "index.html");
    });
*/

//route the GET request to the specified path, "/user". 
//This sends the user information to the path  
app.post('/user', function(req, res){
        response = {
            first_name : req.body.first_name,
            last_name : req.body.last_name
            };
        
        //this line is optional and will print the response on the command prompt
        //It's useful so that we know what infomration is being transferred 
        //using the server
        console.log(response);
        
        //convert the response in JSON format
        res.end(JSON.stringify(response));
});

/*
//This piece of code creates the server  
//and listens to the request at port 8888
//we are also generating a message once the 
//server is created
var server = app.listen(8888, function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log("Example app listening at http://%s:%s", host, port);
    });
    */
