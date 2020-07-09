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
            .setCheck(["String", "picture", "file"])
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
            .setCheck(["String", "picture", "file"])
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
    var time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
    return "displayDuring(" + picture + "," + time + ");";
};

function getExtension(path) {
    return path.split('.').pop();
}

function isPicture(path) {
    const pictExt = ["jpg", "jpeg", "png", "gif"];
    if (pictExt.indexOf(getExtension(path)) >= 0) {
        return true;
    }
    return false;
}

function isCSV(path) {
    if (getExtension(path) == "csv") {
        return true;
    }
    return false;
}

function isLocal(path){
   return !(path.split(':')[0] == "http" || path.split(':')[0] == "https");
}
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
    if (isPicture(path)) {
        canvas.style.backgroundColor = 'transparent';
        canvas.style.border = 'none';
        canvas.style.padding = 0;
        if (isLocal(path)){
            path = REP + path;
        }
        img.src = path;
    } else if (isCSV(path)) {
        readCSVFile(makeChart, path);
    }
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