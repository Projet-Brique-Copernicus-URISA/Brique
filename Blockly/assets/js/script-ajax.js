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
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('error ' + textStatus + " " + errorThrown);
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
 * in order to move download.nc to tmp/ and delete copernicus_request.py ( which is useless now )
 *
 * @returns {String} execution done message
 */
function doAjaxRequest_requestClean() { //MAYBE SWITCH TO A POST REQUEST WITH PARAMETERS
    /*
    //to get the correct httpRequest object 
    var httpRequest = getHttpRequest();

    httpRequest.open('GET', 'http://localhost:8082/moveAndClean', true);
    httpRequest.send();

    return 'clean done'
    */
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
