    var http = require('http');  
    var url = require('url');  
    var fs = require('fs');  
    var server = http.createServer(function(request, response) {  
        var path = url.parse(request.url).pathname;  
        switch (path) {  

            case '/script-test.js':
                fs.readFile(__dirname + path, function(error, data) {  
                    if (error) {  
                        response.writeHead(404);  
                        response.write(error);  
                        response.end();  
                    } else {  
                        /*
                        response.writeHead(200, {  
                            'Content-Type': 'application/javascript'
                        });  
                        response.write(data);  
                        response.end(); 
                        */
                       
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
              
            case '/assets/css/style.css':
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
            break;
            
            case '/Blockly/blockly_compressed.js':
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
            break; 

            case '/Blockly/blocks_compressed.js':
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
            break;
   
            case '/Blockly/msg/js/fr.js':
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
            break;

            case '/Blockly/javascript_compressed.js':
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
            break;

            case '/assets/js/oXHR.js':
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
            break;

            case '/assets/js/blockly-set-up.js':
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
            break;

            case '/assets/js/ihm.js':
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
            break;

            case '/assets/js/upload.js':
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
            break;

            case '/assets/js/blocks/Area.js':
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
            break;

            case '/assets/js/blocks/copernicus.js':
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
            break;

            case '/assets/js/blocks/display.js':
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
            break;

            case '/assets/js/blocks/file-manager.js':
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
            break;

            case '/assets/js/blocks/Thematic.js':
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
            break;

            case '/script-ajax.js':
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
            break;            

            case '/assets/img/copernicus_logo.png':
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
            break;

            default:  
                response.writeHead(404);  
                response.write("opps this doesn't exist - 404 !");  
                response.end();  
            break;  
        }  
    });  
    server.listen(8082);  