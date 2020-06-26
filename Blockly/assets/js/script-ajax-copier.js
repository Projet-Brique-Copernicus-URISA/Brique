
/**
 * function to forecast different browser ( mozilla, Internet explorer, ...)
 */
var getHttpRequest = function() {
    var httpRequest = false;

    if(window.XMLHttpRequest) { //if use with Firefox, Safari, Chrome, etc ...
        httpRequest = new XMLHttpRequest();

        if(httpRequest.overrideMimeType){
            httpRequest.overrideMimeType('test/xml');
        }
    }

    else if (window.ActiveXObject){ //if used with Internet Explorer (different case bacause IE don't use XMLHttpRequest but ActiveXObject)
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e){
            try{
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e){
                //...
            }
        }
    }

    if (!httpRequest) {
        alert('Abandon: Impossible de créer une instance XMLHTTP, \tConsequence: requete Copernicus annulé');
        return false;
    }

    return httpRequest;
};

//to get the balise where script execution goes

/**
 * to do the ajax request
 */
function doAjaxRequest_download() {
    var fileName = "nomDuFichier";
    var fileContent = "contenuDuFichier"
    
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

//main 
var button = document.getElementById("copier_button");
button.addEventListener('click', function(){
    doAjaxRequest_download();
});