/** 
 * @file Blocky Set Up
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.2
 */

var canvas;
var ctx;
var timeout;
var img;

/** Initialise the method that change the Blockly code to Javascript code and execute it */
$(document).ready(function () {

  canvas = document.getElementById("canvas-display");
  ctx = canvas.getContext("2d");
  img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox')
  });

  workspace.registerButtonCallback('newpicture', function (button) {
    Blockly.Variables.createVariable(button.getTargetWorkspace(), null, 'picture');
  });

  var buttonStart = document.getElementById("button-start");
  var code;
  buttonStart.onclick = function () {
    timeout = 0;
    code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log("********************** CODE START **********************");
    console.log(code);
    console.log("********************** CODE END **********************");
    try { eval(code); } catch (e) { alert(e); };
  };
});
