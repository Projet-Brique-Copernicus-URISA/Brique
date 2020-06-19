/** 
 * @file DEMO
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

// TODO : COMMENTAIRES et eventuellement delete


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
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
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
 * LOAD LOCAL IMAGE
 * _______________________________________________________________________________________
 * */

/** The LOAD LOCAL IMAGE block definition */
Blockly.Blocks['load_local_image'] = {
    init: function () {
        this.appendValueInput("pathTo")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Charger");
        this.appendValueInput("var")
            .setCheck('picture')
            .appendField("dans ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/** The LOAD LOCAL IMAGE associated method */
Blockly.JavaScript['load_local_image'] = function (block) {
    var value_pathto = Blockly.JavaScript.valueToCode(block, 'pathTo', Blockly.JavaScript.ORDER_ATOMIC);
    var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};