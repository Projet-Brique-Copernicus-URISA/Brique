/** 
 * @file Blocky Set Up
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.2
 */

/** Initialise the method that change the Blockly code to Javascript code and execute it */
$(document).ready(function () {

  var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox')
  });

  workspace.registerButtonCallback('newpicture', function (button) {
    Blockly.Variables.createVariable(button.getTargetWorkspace(), null, 'picture');
  });

  websocket = new WebSocket("ws://192.168.0.12:8000/");
  var buttonStart = document.getElementById("button-start");
  var code;
  buttonStart.onclick = function () {
    code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log("CODE START");
    console.log(code);
    console.log("CODE END");
    websocket.send('hello');
    try { eval(code); } catch (e) { alert(e); };
  };
});
