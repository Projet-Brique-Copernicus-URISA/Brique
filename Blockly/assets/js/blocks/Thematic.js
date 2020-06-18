/** 
 * @file Thematics Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/** POLLUTION block definition */
Blockly.Blocks['thematic_pollution'] = {
    init: function () {
        this.setOutput(true, 'String');
        this.setColour(30);
        this.appendDummyInput().appendField('Pollution');
    }
};

/** POLLUTION block associated method */
Blockly.JavaScript['thematic_pollution'] = function () {
    var code = '...;\n';
    return code;
};