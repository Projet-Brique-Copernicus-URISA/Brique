/** 
 * @file Files Manager Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

// TODO : COMMENTAIRES

Blockly.Blocks['file_reader'] = {
    init: function () {
        this.appendValueInput("path")
            .setCheck("String")
            .appendField("Lecture fichier");
        this.setInputsInline(true);
        this.setOutput(true, 'picture');
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['file_reader'] = function (block) {
    var path = block.getFieldValue('path');
    return ["\"" + path + "\"", Blockly.JavaScript.ORDER_MEMBER];
};