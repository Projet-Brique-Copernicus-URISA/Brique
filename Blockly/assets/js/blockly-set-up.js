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
