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

    return httpRequest
}

//to get the balise where script execution goes
result = document.getElementById('test-ajax');

//to get the button which declench the ajax
var b = document.getElementById('bb');

//to add an event when click on the button
b.addEventListener('click', function(e){
    //to show that request is loading
    result.innerHTML = 'Chargement ...';

    //to get the correct httpRequest object 
    var httpRequest = getHttpRequest();

    //to follow state modifiaction
    httpRequest.onreadystatechange = function () {
        if(httpRequest.readyState === 4 ){
            //here we can do code like get reponse text of the script
            result.innerHTML = "Requete fait";
        }

        console.log(httpRequest);
    }

    httpRequest.open('GET', '/script-test.js', true);
    httpRequest.send();
});

/*
Note : 
 - by default, ajax can only "talk" with files which are on the same host
*/
  