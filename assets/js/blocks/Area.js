/** 
 * @file Areas Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/** PARIS block definition */
Blockly.Blocks['area_paris'] = {
    init: function () {
        this.setOutput(true, 'String');
        this.setColour(100);
        this.appendDummyInput().appendField('FR - Paris');
    }
};

/** PARIS block associated method */
Blockly.JavaScript['area_paris'] = function () {
    var code = '...;\n';
    return code;
};

/** NEW YORK block definition */
Blockly.Blocks['area_newyork'] = {
    init: function () {
        this.setOutput(true, 'String');
        this.setColour(100);
        this.appendDummyInput().appendField('US - New York');
    }
};

/** NEW YORK block associated method */
Blockly.JavaScript['area_newyork'] = function () {
    var code = '...;\n';
    return code;
};


/** CUSTOM AREA block definition */
Blockly.Blocks['area_custom'] = {
    init: function () {
        this.setOutput(true, 'String');
        this.setColour(100);
        this.appendDummyInput()
            .appendField('Longitude')
            .appendField(new Blockly.FieldTextInput("000000"), "LONGITUDE")
            .appendField('Latitude')
            .appendField(new Blockly.FieldTextInput("000000"), "LONGITUDE");
    }
};

/** CUSTOM AREA block associated method */
Blockly.JavaScript['area_custom'] = function () {
    var code = '...;\n';
    return code;
};