/** 
 * @file Picture Types Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

// TODO : COMMENTAIRES

Blockly.Blocks['ptype_pollution'] = {
    init: function () {
        this.setOutput(true, 'String');
        this.setColour(30);
        this.appendDummyInput().appendField('Pollution');
    }
};

Blockly.JavaScript['ptype_pollution'] = function () {
    var code = '...;\n';
    return code;
};