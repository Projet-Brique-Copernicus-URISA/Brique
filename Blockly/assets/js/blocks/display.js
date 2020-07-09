/** 
 * @file Display Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */


let REP = "./mesImages/";

/** DISPLAY VAR block definition */
Blockly.Blocks['display'] = {
    init: function () {
        this.appendValueInput("picture_to_display")
            .setCheck(["String", "picture"])
            .appendField("Afficher");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/** DISPLAY VAR block associated method */
Blockly.JavaScript['display'] = function (block) {
    var picture = Blockly.JavaScript.valueToCode(block, 'picture_to_display', Blockly.JavaScript.ORDER_ATOMIC);
    return "displayPicture(" + picture + ")";
};

/** DISPLAY VAR WITH TIMER block definition */
Blockly.Blocks['display_duration'] = {
    init: function () {
        this.appendValueInput("picture_to_display")
            .setCheck(["String", "picture"])
            .appendField("Afficher");
        this.appendValueInput("time")
            .appendField("pendant")
            .setCheck(["Number"]);
        this.appendDummyInput()
            .appendField("secondes");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/** DISPLAY VAR WITH TIMER block associated method */
Blockly.JavaScript['display_duration'] = function (block) {
    var picture = Blockly.JavaScript.valueToCode(block, 'picture_to_display', Blockly.JavaScript.ORDER_ATOMIC);
    var time = block.getFieldValue('time');
    return "displayDuring(" + picture + "," + time + ");";
};


/**
 * A COMMENTER
 * 
 *
 * @param {String} path
 */
function displayPicture(path) {
    setTimeout("disp(\"" + path + "\")", timeout * 1000);
}

/**
 * 
 * @param {*} path 
 */
function disp(path) {
    canvas.style.backgroundColor = 'transparent';
    canvas.style.border = 'none';
    canvas.style.padding = 0;
    img.src = REP + path;
}

/**
 * 
 * @param {*} path 
 * @param {*} time 
 */
function displayDuring(path, time) {
    displayPicture(path);
    timeout += time;
    setTimeout(removePicture, timeout * 1000);
}

/**
 * 
 */
function removePicture() {
    canvas.style.backgroundColor = '#ddd';
    canvas.style.border = '2px solid white';
    ctx.fillStyle = '#ddd';
    ctx.beginPath();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
    ctx.fill();
}