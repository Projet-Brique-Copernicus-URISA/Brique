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

Blockly.JavaScript['string_length'] = function (block) {
  // String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
    Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks['display_image'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('String')
      .appendField('Afficher image de');
    this.setColour(160);
    this.setTooltip('Display an image from an URL in the web page.');
  }
};

Blockly.JavaScript['display_image'] = function (block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
    Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var instruction = "var img = document.createElement(\"img\");"+
                    "img.setAttribute(\"src\","+argument0+");"+
                    "var body = document.getElementById(\"display\");"+
                    "body.style.padding = 0;"+
                    "while(body.hasChildNodes()){body.removeChild(body.lastChild);}"+
                    "body.appendChild(img);";
  return instruction;
};

Blockly.Blocks['dog_image'] = {
  init: function () {
    this.setOutput(true, 'String');
    this.setColour(160);
    this.appendDummyInput().appendField('chien');
  }
};

Blockly.JavaScript['dog_image']= function(){
  var url = "\"https://www.chien-bonheur.fr/wp-content/uploads/2017/01/j_znKKdS_9U-ROOvzosBtV0HRWc.jpg\"";
  return [url, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks['cat_image'] = {
  init: function () {
    this.setOutput(true, 'String');
    this.setColour(160);
    this.appendDummyInput().appendField('chat');
  }
};

Blockly.JavaScript['duck_image']= function(){
  var url = "\"https://i.ytimg.com/vi/8Qvao19J7dk/maxresdefault.jpg\"";
  return [url, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks['duck_image'] = {
  init: function () {
    this.setOutput(true, 'String');
    this.setColour(160);
    this.appendDummyInput().appendField('caneton');
  }
};

Blockly.JavaScript['cat_image']= function(){
  var url = "\"http://mesamoursdemanga.m.e.pic.centerblog.net/o/162cfdba.jpg\"";
  return [url, Blockly.JavaScript.ORDER_MEMBER];
};


$( document ).ready(function() {

  var workspace = Blockly.inject('blocklyDiv',
  { toolbox: document.getElementById('toolbox') });
  
  var buttonStart = document.getElementById("button-start");
  var code;
  buttonStart.onclick = function () {
    code = Blockly.JavaScript.workspaceToCode(workspace)
    console.log(code)
    try{eval(code)}catch(e){alert(e)};
  };
});
