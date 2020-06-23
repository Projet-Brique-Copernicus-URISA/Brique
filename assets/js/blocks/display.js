/** 
 * @file Display Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/** DISPLAY VAR block definition */
Blockly.Blocks['display'] = {
    init: function () {
        this.appendValueInput("picture_to_display")
            .setCheck(["String", "picture"])
            .appendField("Afficher");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/** DISPLAY VAR block associated method */
Blockly.JavaScript['display'] = function (block) {
    var picture = Blockly.JavaScript.valueToCode(block, 'picture_to_display', Blockly.JavaScript.ORDER_ATOMIC);
    return "displayPicture(" + picture + ")";
};

/** DISPLAY VAR 2 block definition */
Blockly.Blocks['display_duration'] = {
    init: function () {
        this.appendValueInput("picture_to_display")
            .setCheck(["String", "picture"])
            .appendField("Afficher");
        this.appendDummyInput()
            .appendField("pendant")
            .appendField(new Blockly.FieldNumber(0, 1, 60), "NAME")
            .appendField("secondes");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/** DISPLAY VAR 2 block associated method */
Blockly.JavaScript['display_duration'] = function (block) {
    var picture = Blockly.JavaScript.valueToCode(block, 'picture_to_display', Blockly.JavaScript.ORDER_ATOMIC);
    return "displayPicture(" + picture + ")";
};

/** DISPLAY PATH block definition */
Blockly.Blocks['display_path'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Afficher")
            .appendField(new Blockly.FieldTextInput("mesImages/exemple.jpg"), "path");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/** DISPLAY PATH block associated method */
Blockly.JavaScript['display_path'] = function (block) {
    var path = block.getFieldValue('path');
    var code = "displayPicture(\"" + path + "\");";
    return code;
};


/**
 * A COMMENTER
 *
 * @param {String} path
 */
function displayPicture(path) {
    var img = document.createElement("img");
    img.setAttribute("src", path);
    var body = document.getElementById("display");
    body.style.padding = 0;
    while (body.hasChildNodes()) {
        body.removeChild(body.lastChild);
    }
    body.appendChild(img);
}