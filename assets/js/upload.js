/** 
 * @file upload
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

 // TODO : COMMENTAIRES a intégrer


var display = document.getElementById("display")
var input = document.getElementById("input")

input.onchange = function(){
    var FR = new FileReader();
    FR.onload = function(){
        var img = new Image();
        console.log(img)
        img.src = FR.result;
        img.y = 0;
        img.x=0;
        if(display.childElementCount != 0)
            display.removeChild(display.childNodes[0])
        display.appendChild(img);
    }
    FR.readAsDataURL(input.files[0]);
}