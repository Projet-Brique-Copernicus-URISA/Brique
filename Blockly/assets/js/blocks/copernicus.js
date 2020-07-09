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
    return "doAjaxRequest_copernicus();";
};

/** COPERNICUS REQUEST FULL PARAMETERS block definition */
Blockly.Blocks['copernicus_request_full_parameters_1_pic'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Requete Copernicus pour 1 image");
            this.appendDummyInput()
            .appendField("Date :")
            .appendField(new Blockly.FieldNumber(new Date().getDate(), 1, 31), "DAY")
            .appendField("/")
            .appendField(new Blockly.FieldNumber(new Date().getMonth() + 1, 1, 12), "MONTH")
            .appendField("/")
            .appendField(new Blockly.FieldNumber(new Date().getFullYear(), 1970, new Date().getFullYear()), "YEAR");
        this.appendDummyInput()
            .appendField("thématique :")
            .appendField(new Blockly.FieldDropdown([["\'thematic_atmosphere_pollution_particulate\'","Pollution (particules fines)"], ["Catastrophe", "CATASTROPHE"], ["Maritime", "MARITIME"]]), "THEME");
        this.appendDummyInput()
            .appendField("zone géographique :")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
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
    return ["\"mesImages/exemple.jpg\"", Blockly.JavaScript.ORDER_MEMBER];
};

/** COPERNICUS REQUEST FULL PARAMETERS block definition */
Blockly.Blocks['copernicus_request_full_entrance_1_pic'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Requete Copernicus pour 1 image");
        this.appendValueInput("DATE")
            .setCheck('date')
            .appendField("date :");
        this.appendValueInput("THEME")
            .setCheck("theme")
            .appendField("thématique :");
        this.appendValueInput("AREA")
            .setCheck("area")
            .appendField("zone géographique :");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


/** COPERNICUS REQUEST FULL PARAMETERS block associated method */
Blockly.JavaScript['copernicus_request_full_entrance_1_pic'] = function (block) {
    var number_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    //var text_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    //var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var path = block.getFieldValue('path');

    var block_date = Blockly.JavaScript.valueToCode(block, 'DATE', Blockly.JavaScript.ORDER_ATOMIC);
    var block_topic = Blockly.JavaScript.valueToCode(block, 'THEME', Blockly.JavaScript.ORDER_ATOMIC);
    var block_area = Blockly.JavaScript.valueToCode(block, 'AREA', Blockly.JavaScript.ORDER_ATOMIC);

    var test_code = "\"mesImages/exemple.jpg\"";
    var code = "launchCopernicusRequest(" + block_topic + ", " + block_date + ", " + block_area + ");";

    return code;
};