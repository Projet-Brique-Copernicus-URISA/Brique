/** 
 * @file Copernicus Requests Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

 // TODO : COMMENTAIRES


// V1 __________________________________________________________________________________________________________________________


// VAR

Blockly.JavaScript['copernicus_to_var'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['download_from_copernicus_3'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Télécharger")
            .appendField(new Blockly.FieldNumber(0, 1, 20), "NAME")
            .appendField("image(s) de")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME")
            .appendField("entre le")
            .appendField(new Blockly.FieldTextInput("default"), "NAME")
            //.appendField(new Blockly.FieldDate('2020-02-20'), 'FIELDNAME')
            .appendField("et le")
            .appendField(new Blockly.FieldTextInput("default"), "NAME")
            //.appendField(new Blockly.FieldDate('2020-02-20'), 'FIELDNAME')
            .appendField("sur la zone");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['download_from_copernicus_3'] = function (block) {
    var number_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');

    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks['download_from_copernicus_2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Télécharger")
            .appendField(new Blockly.FieldNumber(0, 1, 20), "NAME")
            .appendField("image(s) de")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME")
            .appendField("entre le")
            .appendField(new Blockly.FieldTextInput("default"), "NAME")
            //.appendField(new Blockly.FieldDate('2020-02-20'), 'FIELDNAME')
            .appendField("et le")
            .appendField(new Blockly.FieldTextInput("default"), "NAME")
            //.appendField(new Blockly.FieldDate('2020-02-20'), 'FIELDNAME')
            .appendField("sur la zone")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['download_from_copernicus_2'] = function (block) {
    var number_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');

    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['download_from_copernicus_1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Télécharger")
            .appendField(new Blockly.FieldNumber(0, 1, 20), "NAME")
            .appendField("image(s) de")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME")
            .appendField("entre le")
            .appendField(new Blockly.FieldTextInput("default"), "NAME")
            //.appendField(new Blockly.FieldDate('2020-02-20'), 'FIELDNAME')
            .appendField("et le")
            .appendField(new Blockly.FieldTextInput("default"), "NAME")
            //.appendField(new Blockly.FieldDate('2020-02-20'), 'FIELDNAME')
            .appendField("sur la zone")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['download_from_copernicus'] = function (block) {
    var number_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

// TEL BRIVAR

Blockly.Blocks['copernicus_to_var'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("picture")
            .appendField("Télécharger une image de ")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME")
            .appendField("datant du")
            .appendField(new Blockly.FieldTextInput("default"), "NAME")
            .appendField("pour la zone")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME")
            .appendField("dans");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("TEL BRIVAR");
        this.setHelpUrl("");
    }
};

// V2 __________________________________________________________________________________________________________________________

Blockly.Blocks['nb_picture_choice'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Nombre d'image(s) : ")
            .appendField(new Blockly.FieldNumber(0, 1, 20), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['nb_picture_choice'] = function (block) {
    var number_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks['picture_type_choice'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Type d'image :")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['picture_type_choice'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks['zone_choice'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Zone :")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['zone_choice'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks['date_choice'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Intervalle de temps : entre le")
            .appendField(new Blockly.FieldTextInput("default"), "NAME")
            .appendField("et le")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['date_choice'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks['copernicus_request_v2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Requete Copernicus");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['copernicus_request_v2'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


// V3 __________________________________________________________________________________________________________________________


Blockly.Blocks['copernicus_request_v3_full_parameters'] = {
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
            .appendField("type d'image :")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME");
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

Blockly.JavaScript['copernicus_request_v3_full_parameters'] = function (block) {
    var number_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var text_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks['copernicus_request_v3_full_entrance'] = {
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
            .appendField("type d'image :");
        this.appendValueInput("NAME")
            .setCheck("Area")
            .appendField("zone géographique :");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['copernicus_request_v3_full_entrance'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks['request_to_var'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Placer le résultat de");
      this.appendStatementInput("NAME")
          .setCheck(null);
      this.appendValueInput("NAME")
          .setCheck("picture")
          .appendField("dans");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.JavaScript['request_to_var'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };


