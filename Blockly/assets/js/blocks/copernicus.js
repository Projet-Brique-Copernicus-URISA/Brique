/** 
 * @file Copernicus Requests Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/** COPERNICUS REQUEST FULL PARAMETERS block definition */
Blockly.Blocks['do_request'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Requete Copernicus TEST");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


/** COPERNICUS REQUEST FULL PARAMETERS block associated method */
Blockly.JavaScript['do_request'] = function (block) {
    return "doAjaxRequest();";
};

/** COPERNICUS REQUEST FULL PARAMETERS block definition */
Blockly.Blocks['copernicus_request_full_parameters_1_pic'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Requete Copernicus pour 1 image");
        this.appendDummyInput()
            .appendField("date :")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.appendDummyInput()
            .appendField("thématique :")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME");
        this.appendDummyInput()
            .appendField("zone géographique :")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME");
        this.setOutput(true, 'picture');
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


/** COPERNICUS REQUEST FULL PARAMETERS block associated method */
Blockly.JavaScript['copernicus_request_full_parameters_1_pic'] = function (block) {
    var number_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var path = block.getFieldValue('path');
    return ["\"mesImages/c.jpg\"", Blockly.JavaScript.ORDER_MEMBER];
};

/** COPERNICUS REQUEST FULL PARAMETERS block definition */
Blockly.Blocks['copernicus_request_full_entrance_1_pic'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Requete Copernicus pour 1 image");
            this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("date :");
        this.appendValueInput("NAME")
            .setCheck("PictureType")
            .appendField("thématique :");
        this.appendValueInput("NAME")
            .setCheck("Area")
            .appendField("zone géographique :");
        this.setOutput(true, 'picture');
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


/** COPERNICUS REQUEST FULL PARAMETERS block associated method */
Blockly.JavaScript['copernicus_request_full_entrance_1_pic'] = function (block) {
    var number_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var path = block.getFieldValue('path');
    return ["\"mesImages/exemple.jpg\"", Blockly.JavaScript.ORDER_MEMBER];
};

/** COPERNICUS REQUEST FULL PARAMETERS block definition */
Blockly.Blocks['copernicus_request_full_parameters'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Requete Copernicus");
        this.appendDummyInput()
            .appendField("nombre d'image(s) :")
            .appendField(new Blockly.FieldNumber(0, 1, 20), "NAME");
        this.appendDummyInput()
            .appendField("date début :")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.appendDummyInput()
            .appendField("date fin :")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.appendDummyInput()
            .appendField("thématique :")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME");
        this.appendDummyInput()
            .appendField("zone géographique :")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME");
        this.setOutput(true, 'request_result');
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


/** COPERNICUS REQUEST FULL PARAMETERS block associated method */
Blockly.JavaScript['copernicus_request_full_parameters'] = function (block) {
    var number_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

/** COPERNICUS REQUEST FULL ENTRANCE block definition */
Blockly.Blocks['copernicus_request_full_entrance'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Requete Copernicus");
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField("nombre d'image(s) :");
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("date début :");
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("date fin :");
        this.appendValueInput("NAME")
            .setCheck("PictureType")
            .appendField("thématique :");
        this.appendValueInput("NAME")
            .setCheck("Area")
            .appendField("zone géographique :");
        this.setOutput(true, 'request_result');
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


/** COPERNICUS REQUEST FULL ENTRANCE block associated method */
Blockly.JavaScript['copernicus_request_full_entrance'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};