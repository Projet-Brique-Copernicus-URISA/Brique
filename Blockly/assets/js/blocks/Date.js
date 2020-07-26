/**
 * @license
 * Copyright 2020 Noa Ammirati Maxime Dumonteil Mathis Lecoeuvre URISA
 *
 *   This file is part of Brique Copernicus.
 *
 * This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
/** 
 * @file Areas Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/** DATE block definition */
Blockly.Blocks['date'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Date :")
            .appendField(new Blockly.FieldNumber(new Date().getDate(), 1, 31), "DAY")
            .appendField("/")
            .appendField(new Blockly.FieldNumber(new Date().getMonth() + 1, 1, 12), "MONTH")
            .appendField("/")
            .appendField(new Blockly.FieldNumber(new Date().getFullYear(), 1970, new Date().getFullYear()), "YEAR");
        this.setOutput(true, "date");
        this.setColour(0);
        this.setTooltip("JJ/MM/AAAA");
        this.setHelpUrl("");
    }
};


/** DATE block associated method */
Blockly.JavaScript['date'] = function (block) {
    var number_day = block.getFieldValue('DAY');
    var number_month = block.getFieldValue('MONTH') - 1;
    var number_year = block.getFieldValue('YEAR');
    var code = "new Date(" + number_year + "," + number_month + "," + number_day + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

/** PERIOD block definition */
Blockly.Blocks['period'] = {
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
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/** PERIOD block associated method */
Blockly.JavaScript['period'] = function (block) {
    var value_start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC);
    var value_end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "doPeriod(" + value_start + "," + value_end + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Check if a period is valid before instaciating it
 * @param {Date} value_start 
 * @param {Date} value_end 
 */
function doPeriod(value_start, value_end){
    if (value_start.getTime() > value_end.getTime()) {
        alert("Période non conforme : " + value_start.toLocaleDateString() + " n'est pas antérieure à " + value_end.toLocaleDateString());
    } else {
        return new PeriodValue(value_start, value_end);
    }
}

/**
 * Clas PERIODVALUE
 */
class PeriodValue {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}