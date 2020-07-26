#!/usr/bin/env node

/**
 * @license
 * Copyright 2020 Noa Ammirati Maxime Dumonteil Mathis Lecoeuvre URISA
 *
 *   This file is part of Brique Copernicus.
 *
 * This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
/** 
 * @file upload
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

var port = 8082 ;
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var fs = require('fs'); 
var url = require('url'); 

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//GET pages
// for the main page
app.get('/', function(req, res){
    var path = "/index.html"//url.parse(req.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            res.writeHead(404);  
            res.write(error);  
            res.end();  
        } else {  
            res.writeHead(200, {  
                'Content-Type': 'text/html; charset=utf8'  
            });  
            res.write(data);  
            res.end();  
        }  
    });  
});

//load css file

app.get('/assets/css/*.css', function(request, response){
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

app.get('/Blockly/*.js', function(request, response){
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

app.get('/assets/js/*.js', function(request, response){
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

app.get('/assets/img/*.png', function(request, response){
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

app.get('/mesImages/*.png', function(request, response){
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

app.get('/mesData/*.csv', function(request, response){
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

//end GET pages

//Call python 
// to test copernicus request
app.get('/assets/js/script-test.js', function(request, response){
    var path = url.parse(request.url).pathname; 
    fs.readFile(__dirname + path, function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else { 
            const  spawn  = require('child_process').spawn;
            const process = spawn('python', ['./assets/python/script-test.py']);
            process.stdout.on('data', (data) => {
                console.log(data.toString());
            });

            response.end();         
        }  
    });  
     
});

// to store data and remove useless files
app.get('/moveAndClean', function(request, response, next){
    const  spawn  = require('child_process').spawn;
    const process = spawn('python', ['./assets/python/moveAndClean.py ', "download.nc", "tmp/", "copernicus_request.py"]);
    process.stdout.on('data', (data) => {
        console.log(data.toString());
    });
 
    response.end();         
});

// to write a file
app.post('/assets/js/script-copier.js', function(request, response, next){
   var path = url.parse(request.url).pathname; 
   fs.readFile(__dirname + path, function(error, data) {  
       if (error) {  
           response.writeHead(404);  
           response.write(error);  
           response.end();  
       } else {
            var fileName = request.body.name;
            var fileContent = request.body.content;

            const  spawn  = require('child_process').spawn;
            const process = spawn('python', ['./assets/python/CoperFileWriter.py ', fileName, fileContent]);
            process.stdout.on('data', (data) => {
               console.log(data.toString());
            });

            response.end();         
       }  
   });  

});

//to execute copernicus_request.py, which have to download, compute, process, store data and remove useless file
app.post('/executePython', function(request, response, next){
    var fileName = request.body.name;
    var message = "error empty";
 
    const  spawn  = require('child_process').spawn;
    const process = spawn('python', ['copernicus_request.py']);
    process.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    response.end();    
});

// to convert netCDF file to png file
app.post('/convertNcToPng', function(request, response, next){
    var fileName = request.body.fileName;
    var varName = request.body.varName;
    var title = request.body.title;
    var newFileName = request.body.newFileName;

    const  spawn  = require('child_process').spawn;
    const process = spawn('python', ['./assets/python/ncToPng.py ', fileName, varName, title, newFileName]);
    process.stdout.on('data', (data) => {
        console.log(data.toString());
    });
 
    response.end();         
 });

//end Call python

//to send a feedback in the terminal when the server start
app.listen(port, function(){
    console.log('Le serveur fonctionne sur le port '+ port) ;
}) ;
