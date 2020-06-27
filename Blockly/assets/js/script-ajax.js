/**
 * function to forecast different browser ( mozilla, Internet explorer, ...)
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
 * to do the ajax request
 */
function doAjaxRequest_download(fileName, fileContent) {
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
