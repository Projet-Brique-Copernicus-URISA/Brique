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
            .appendField(new Blockly.FieldNumber(0, 1, 31), "DAY")
            .appendField("/")
            .appendField(new Blockly.FieldNumber(0, 1, 12), "MONTH")
            .appendField("/")
            .appendField(new Blockly.FieldNumber(0, 2018, 2020), "YEAR");
        this.setOutput(true, "date");
        this.setColour(75);
        this.setTooltip("JJ/MM/AAAA");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['block_date'] = function (block) {
    var number_day = block.getFieldValue('DAY');
    var number_month = block.getFieldValue('MONTH');
    var number_year = block.getFieldValue('YEAR');
    // TODO CHECK IF IT4S A REAL DAY
    var code = "new DateValue(" + number_day + "," + number_month + "," + number_year + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

class DateValue {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}


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
    // TODO: CHECK IF THE START IS BEFORE THE END
    var code = "new PeriodValue(" + value_start + "," + value_end + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

class PeriodValue{
    constructor(start, end){
        this.start= start;
        this.end = end;
    }
}