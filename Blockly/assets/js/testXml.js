/*
    Copyright 2020 Noa Ammirati Maxime Dumonteil Mathis Lecoeuvre URISA

    This file is part of Brique Copernicus.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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