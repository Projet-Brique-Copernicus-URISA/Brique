/** 
 * @file Display Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */


let REPIMAGE = "./mesImages/";
let REPDATA = "./mesData/";

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
    var pictlure = Blockly.JavaScript.valueToCode(block, 'picture_to_display', Blockly.JavaScript.ORDER_ATOMIC);
    var time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
    return "displayDuring(" + picture + "," + time + ");";
};

/**
 * Compute a file's name in order to find its extension.
 * @param {*} path the file's name
 * @returns the extension of the file
 */
function getExtension(path) {
    return path.split('.').pop();
}

/**
 * Compute a file's name in order to know if it is a picture or not.
 * @param {*} path the file's name
 * @return true if the file is a picture
 */
function isPicture(path) {
    const pictExt = ["jpg", "jpeg", "png", "gif", "pdf", "tif", "svg"];
    if (pictExt.indexOf(getExtension(path)) >= 0) {
        return true;
    }
    return false;
}

/**
 * Compute a file's name in order to know if it is a csv file or not.
 * @param {*} path the file's name
 * @return true if the file is a csv
 */
function isCSV(path) {
    if (getExtension(path) == "csv") {
        return true;
    }
    return false;
}

/**
 * Compute a file's name in order to know if it is a local file or not.
 * @param {*} path the file's name
 * @return true if the file is local
 */
function isLocal(path){
   return !(path.split(':')[0] == "http" || path.split(':')[0] == "https");
}
/**
 * Display a picture/graph via its file's name at the correct moment.
 * @param {String} path the file's name
 */
function displayPicture(path) {
    setTimeout("disp(\"" + path + "\")", timeout * 1000);
}

/**
 * Display a picture/graph via it's file's name.
 * @param {*} path the file's name
 */

function disp(path) {
    if (isPicture(path)) {
        canvas.style.backgroundColor = 'transparent';
        canvas.style.border = 'none';
        canvas.style.padding = 0;
        if (isLocal(path)){
            path = REPIMAGE + path;
        }
        img.src = path;
    } else if (isCSV(path)) {
        readCSVFile(makeChart, REPDATA + path);
    }
}

/**
 * Display a picture/graph via it's file's name during a specified amount of time.
 * @param {*} path the file's name
 * @param {*} time amount of time specified in seconds
 */
function displayDuring(path, time) {
    displayPicture(path);
    timeout += time;
    setTimeout(removePicture, timeout * 1000);
}

/**
 * Remove anything that is displayed at the time is the display window.
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