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
        this.appendDummyInput()
            .appendField("Lecture fichier")
            .appendField(new Blockly.FieldTextInput("mesImages/exemple.jpg"), "path");
        this.setOutput(true, 'file');
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['file_reader'] = function (block) {
    var path = block.getFieldValue('path');
    return ["\"" + path + "\"", Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks['file_reader_2'] = {
    init: function () {
        this.appendValueInput("path")
            .setCheck("String")
            .appendField("Lecture fichier");
        this.setOutput(true, 'file');
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['file_reader_2'] = function (block) {
    var path = block.getFieldValue('path');
    return ["\"" + path + "\"", Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks['select_repository'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Se placer dans le dossier")
            .appendField(new Blockly.FieldTextInput("chemin/de/mon/dossier"), "path");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['select_repository'] = function (block) {
    var path = block.getFieldValue('path');
    return "\n";
};

Blockly.Blocks['read_next_file'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Lire le fichier suivant");
            this.setOutput(true, 'file');
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['read_next_file'] = function (block) {
    var path = block.getFieldValue('path');
    return ["\"" + path + "\"", Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks['is_there_a_next_file'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Il y a un fichier suivant");
        this.setOutput(true, "Boolean");
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['is_there_a_next_file'] = function (block) {
    return true;
};