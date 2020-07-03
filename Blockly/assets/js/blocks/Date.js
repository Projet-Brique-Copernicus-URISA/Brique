/** 
 * @file Areas Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/** PARIS block definition */
Blockly.Blocks['block_date'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Date :")
            .appendField(new Blockly.FieldNumber(new Date().getDate(), 1, 31), "DAY")
            .appendField("/")
            .appendField(new Blockly.FieldNumber(new Date().getMonth() + 1, 1, 12), "MONTH")
            .appendField("/")
            .appendField(new Blockly.FieldNumber(new Date().getFullYear(), 1970, new Date().getFullYear()), "YEAR");
        this.setOutput(true, "date");
        this.setColour(75);
        this.setTooltip("JJ/MM/AAAA");
        this.setHelpUrl("");
    }
};


/**/

Blockly.JavaScript['block_date'] = function (block) {
    var number_day = block.getFieldValue('DAY');
    var number_month = block.getFieldValue('MONTH') - 1;
    var number_year = block.getFieldValue('YEAR');
    var code = "new Date(" + number_year + "," + number_month + "," + number_day + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['block_period'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Période");
        this.appendValueInput("START")
            .setCheck("date")
            .appendField("début :");
        this.appendValueInput("END")
            .setCheck("date")
            .appendField("fin :");
        this.setOutput(true, null);
        this.setColour(75);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['block_period'] = function (block) {
    var value_start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC);
    var value_end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "doPeriod(" + value_start + "," + value_end + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

function doPeriod(value_start, value_end){
    if (value_start.getTime() > value_end.getTime()) {
        alert("Période non conforme : " + value_start.toLocaleDateString() + " n'est pas antérieure à " + value_end.toLocaleDateString());
    } else {
        return new PeriodValue(value_start, value_end);
    }
}

class PeriodValue {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}