/** 
 * @file Blocky Set Up
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/* 
 *  HTTP REQUEST 
 * _______________________________________________________________________________________
 * */

/**  The HTTP REQUEST block defintion */
Blockly.Blocks['http_request'] = {
  init: function () {
    this.setOutput(false);
    this.setColour(160);
    this.appendDummyInput().appendField('Requête http');
  }
};

/** The HTTP REQUEST block associated method */
Blockly.JavaScript['http_request'] = function (block) {
  var instruction = "instructionHttpRequest();";
  return instruction;
};

/**
* Make an HTTP request to an OMNI API
*
*/
function instructionHttpRequest() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://omni2.herokuapp.com/API/1.0/?module=OMNI%20LoRa3&total=10', true);

  request.onload = function () {
    if (this.response != "[]") {
      alert('OK');
      console.log(this.response);
    } else {
      alert("KO");
    }
  };

  request.send();
}

/* 
 * END HTTP REQUEST 
 * STRING LENGTH 
 * _______________________________________________________________________________________
 * */

/** The STRING LENGTH block definition */
Blockly.Blocks['string_length'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('String')
      .appendField('longueur de');
    this.setOutput(true, 'Number');
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  }
};

/* The STRING LENGTH block associated method */
Blockly.JavaScript['string_length'] = function (block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
    Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
};

/* 
 * END STRING LENGTH 
 * DISPLAY IMAGE
 * _______________________________________________________________________________________
 * */

/** The DISPLAY IMAGE block definition */
Blockly.Blocks['display_image'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('String')
      .appendField('Afficher image de');
    this.setColour(160);
    this.setTooltip('Display an image from an URL in the web page.');
  }
};

/** The DISPLAY IMAGE associated method */
Blockly.JavaScript['display_image'] = function (block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
    Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var instruction = "instructionDisplayImage(" + argument0 + ");";
  return instruction;
};

/**
 * A COMMENTER
 *
 * @param {String} argument0
 */
function instructionDisplayImage(argument0) {
  var img = document.createElement("img");
  img.setAttribute("src", argument0);
  var body = document.getElementById("display");
  body.style.padding = 0;
  while (body.hasChildNodes()) {
    body.removeChild(body.lastChild);
  }
  body.appendChild(img);
}

/** DOG block definition */
Blockly.Blocks['dog_image'] = {
  init: function () {
    this.setOutput(true, 'String');
    this.setColour(160);
    this.appendDummyInput().appendField('chien');
  }
};

/** DOG block associated method */
Blockly.JavaScript['dog_image'] = function () {
  var url = "\"https://www.chien-bonheur.fr/wp-content/uploads/2017/01/j_znKKdS_9U-ROOvzosBtV0HRWc.jpg\"";
  return [url, Blockly.JavaScript.ORDER_MEMBER];
};

/** CAT block definition */
Blockly.Blocks['cat_image'] = {
  init: function () {
    this.setOutput(true, 'String');
    this.setColour(160);
    this.appendDummyInput().appendField('chat');
  }
};

/** CAT block associated method */
Blockly.JavaScript['duck_image'] = function () {
  var url = "\"https://i.ytimg.com/vi/8Qvao19J7dk/maxresdefault.jpg\"";
  return [url, Blockly.JavaScript.ORDER_MEMBER];
};

/** DUCK image block definition */
Blockly.Blocks['duck_image'] = {
  init: function () {
    this.setOutput(true, 'String');
    this.setColour(160);
    this.appendDummyInput().appendField('caneton');
  }
};

/** DUCK image block associated method */
Blockly.JavaScript['cat_image'] = function () {
  var url = "\"http://mesamoursdemanga.m.e.pic.centerblog.net/o/162cfdba.jpg\"";
  return [url, Blockly.JavaScript.ORDER_MEMBER];
};

/*
 * END DISPLAY IMAGE
 * _______________________________________________________________________________________
 * */

/** Initialise the method that change the Blockly code to Javascript code and execute it */
$(document).ready(function () {

  var workspace = Blockly.inject('blocklyDiv',
    { toolbox: document.getElementById('toolbox') });

  var buttonStart = document.getElementById("button-start");
  var code;
  buttonStart.onclick = function () {
    code = Blockly.JavaScript.workspaceToCode(workspace)
    console.log(code)
    try { eval(code) } catch (e) { alert(e) };
  };
});
