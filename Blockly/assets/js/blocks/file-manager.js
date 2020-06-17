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
            .appendField(new Blockly.FieldTextInput("chemin/de/mon/image.jpg"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['file_reader'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks['save_result_of'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Enregistrer le résultat de");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("sous")
            .appendField(new Blockly.FieldTextInput("chemin/de/mon/image.jpg"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['save_result_of'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['save_var'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Enregistrer");
        this.appendValueInput("NAME")
            .setCheck("Picture");
        this.appendDummyInput()
            .appendField("sous")
            .appendField(new Blockly.FieldTextInput("chemin/de/mon/image.jpg"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['save_var'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};