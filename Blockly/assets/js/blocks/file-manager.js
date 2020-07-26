/*
    Copyright 2020 Noa Ammirati Maxime Dumonteil Mathis Lecoeuvre URISA

    This file is part of Brique Copernicus.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
/** 
 * @file Files Manager Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/** FILE READER block definition */
Blockly.Blocks['file_reader'] = {
    init: function () {
        this.appendValueInput("path")
            .setCheck("String")
            .appendField("Lecture fichier");
        this.setInputsInline(true);
        this.setOutput(true, '');
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/** FILE READER block associated method */
Blockly.JavaScript['file_reader'] = function (block) {
    var path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
    return [ path , Blockly.JavaScript.ORDER_MEMBER];
};