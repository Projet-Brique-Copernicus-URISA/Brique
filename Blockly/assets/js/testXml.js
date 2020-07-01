
function getXMLHttpRequest() {
    var xhr = null;
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest();
        }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }
    return xhr;
}

function readFile(callback, filename){
    var xhr = getXMLHttpRequest();
  
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          var res = xhr.responseText;
          callback(res);
        }
        if (xhr.status==404) alert("ERROR 404");
        if (xhr.status==500) alert("ERROR 500");
      }
      xhr.open("POST", filename, true);
      xhr.send(null);
}

function yes(txt){
    console.log(txt)

}

var button = document.getElementById("button-stop")
button.onclick = function(){readFile(yes, "texte.txt")}