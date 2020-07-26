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
 * @file IHM
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/**
 * to forecast different browser ( mozilla, internet explorer, ... )
 *
 * @returns the correct XMLHttpRequest for the browser
 */
var getHttpRequest = function() {
    var httpRequest = false;

    //if use Firefox, Safari, Chrome, etc ...
    if(window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();

        if(httpRequest.overrideMimeType){
            httpRequest.overrideMimeType('test/xml');
        }
    }

    //if used Internet Explorer (different case bacause IE don't use XMLHttpRequest but ActiveXObject)
    else if (window.ActiveXObject){ 
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e){
            try{
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e){
                //error message send on the navigator console
                console.log("Error create XMLHTTP object ( maybe caused by Internert Explorer )");
            }
        }
    }

    //if create the XMLHTTP completly fail
    if (!httpRequest) {
        alert('Error : Unable to create an XMLHTTP instance | Consequence : Copernicus request canceled.');
        return false;
    }

    return httpRequest;
};

/**
 * Do an ajax post request to the server to execute the python script
 * in order to create a file
 *
 * @param {*} fileName file's name
 * @param {*} fileContent file's content
 */
function doAjaxRequest_download(fileName, fileContent) { // HAD TO CHANGE FUNCTION NAME
    var datapassed = {name: fileName, content : fileContent};

    $.ajax({
        url: 'http://localhost:8082/assets/js/script-copier.js',
        async: false,
        type: 'POST',
        dataType: 'json',
        data : JSON.stringify(datapassed),
        contentType: "application/json",
        success: function(data) {
            console.log("success :" + data);
        },
        error: function(jqXHR, textStatus, errorThrown, data) {
            console.log('error ' + textStatus + " " + errorThrown + " " + data);
            //console.log('error ' + textStatus + " " + errorThrown + " " + data);
        }
    });
}

/**
 * Do an ajax get request to the server to execute the python script
 * in order to execute a request to the copernicus API
 *
 */
function doAjaxRequest_copernicus() {
    //to show that request is loading
    console.log("Loading ...");

    //to get the correct httpRequest object 
    var httpRequest = getHttpRequest();

    //to follow state modifiaction
    httpRequest.onreadystatechange = function () {
        if(httpRequest.readyState === 4 ){
            //here we can do code like get reponse text of the script
            console.log("request OK");
        }
    }

    httpRequest.open('GET', '/assets/js/script-test.js', true);
    httpRequest.send();
}

/**
 * Do an ajax post request to the server to execute the python script
 * in order to execute a python script
 *
 * @param {*} fileName file's name
 * @returns {String} execution done message
 */
function doAjaxRequest_executePython(fileName) {
    var datapassed = {name: fileName};

    $.ajax({
        url: 'http://localhost:8082/executePython',
        async: false,
        type: 'POST',
        dataType: 'json',
        data : JSON.stringify(datapassed),
        contentType: "application/json",
        success: function(data) {
            console.log("success :" + data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('error ' + textStatus + " " + errorThrown);
        }
    });

    return 'execute python done';
}

/**
 * Do an ajax get request to the server to execute the python script
 * in order to convert .nc file to .png
 * 
 * @param {*} ncFileName
 * @param {*} varName
 * @param {*} graphTitle
 * @param {*} imageName
 * @returns {String} execution done message
 */
function doAjaxRequest_convertNcToPng(ncFileName, varName, graphTitle, imageName) {
    //create the data which is the post message content
    var datapassed = {fileName: ncFileName, varName: varName, title: graphTitle, newFileName: imageName};
    
    $.ajax({
        url: 'http://localhost:8082/convertNcToPng',
        async: false,
        type: 'POST',
        dataType: 'json',
        data : JSON.stringify(datapassed),
        contentType: "application/json",
        success: function(data) {
            console.log("success :" + data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('error from convertNcToPng : ' + textStatus + " " + errorThrown);
        }
    });

    return 'convert nc to png done';
}
