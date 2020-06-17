/** 
 * @file Display Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

// TODO : COMMENTAIRES

Blockly.Blocks['display_result_of'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Afficher le résultat de");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['display_result_of'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks['display_var'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("picture")
            .appendField("Afficher");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("AFF BRIVAR");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['display_var'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['display_var_2'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("picture")
            .appendField("Afficher");
        this.appendDummyInput()
            .appendField("pendant")
            .appendField(new Blockly.FieldNumber(0, 1, 60), "NAME")
            .appendField("secondes");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("AFF BRIVAR");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['display_var_2'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var number_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks['display_url'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Afficher")
            .appendField(new Blockly.FieldTextInput("url/ou/chemin/de/mon/image.com"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['display_url'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};