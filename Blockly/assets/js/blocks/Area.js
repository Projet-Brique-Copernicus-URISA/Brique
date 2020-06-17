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

/** PARIS block definition */
Blockly.Blocks['area_newyork'] = {
    init: function () {
        this.setOutput(true, 'String');
        this.setColour(100);
        this.appendDummyInput().appendField('US - New York');
    }
};

/** PARIS block associated method */
Blockly.JavaScript['area_newyork'] = function () {
    var code = '...;\n';
    return code;
};