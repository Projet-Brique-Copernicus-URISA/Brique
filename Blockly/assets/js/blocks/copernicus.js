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
 * @file Copernicus Requests Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */


/* CODE MORT ****************************************************************/

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

/* FIN CODE MORT ***********************************************************/

/** COPERNICUS REQUEST FULL PARAMETERS block definition */
Blockly.Blocks['copernicus_request_1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Requete Copernicus pour 1 image");
        this.appendDummyInput()
            .appendField("date :")
            .appendField(new Blockly.FieldNumber(new Date().getDate(), 1, 31), "DAY")
            .appendField("/")
            .appendField(new Blockly.FieldNumber(new Date().getMonth() + 1, 1, 12), "MONTH")
            .appendField("/")
            .appendField(new Blockly.FieldNumber(new Date().getFullYear(), 1970, new Date().getFullYear()), "YEAR");
        this.appendDummyInput()
            .appendField("thématique :")
            .appendField(new Blockly.FieldDropdown([["Pollution (particules fines)", "\'thematic_atmosphere_pollution_particulate\'"], ["Couche d\'ozone", "\'thematic_atmosphere_ozone\'"], ["Température", "\'thematic_atmosphere_temperature\'"]]), "THEME");
        this.appendDummyInput()
            .appendField("zone géographique :")
            .appendField(new Blockly.FieldDropdown([
                ["Monde", "new Area(\'world\'," + 0 + "," + 0 + "," + 0 + "," + 0 + ")"],
                ["Europe", "new Area(\'europe\'," + 75 + "," + 30 + "," + 45 + "," + -25 + ")"],
                ["France", "new Area(\'france\'," + 52 + "," + 41 + "," + 10 + "," + -6 + ")"],
                ["FRANCE - Paris", "new Area('paris'," + 49.4 + "," + 48 + "," + 3.7 + "," + 1.3 + ")"],
                ["FRANCE - Nouvelle Aquitaine","new Area('nouvelleaquitaine'," + 47.3 + "," + 42.5 + "," + 3 + "," + -2 + ")"],
                ["Italie","new Area('italy'," + 48 + "," + 36 + "," + 20 + "," + 6 + ")"],
                ["Grande Bretagne","new Area('gb'," + 61.5 + "," + 49 + "," + 4 + "," + -13 + ")"],
                ["Scandinavie","new Area('scandinavia'," + 72 + "," + 54 + "," + 45 + "," + 2 + ")"],
                ["Péninsule Ibérique","new Area('iber'," + 44.5 + "," + 35 + "," + 5 + "," + -10.5 + ")"],
                ["Allemagne","new Area('germany'," + 55.5 + "," + 45.5 + "," + 16 + "," + 5 + ")"]
            ]), "AREA");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


/** COPERNICUS REQUEST FULL PARAMETERS block associated method */
Blockly.JavaScript['copernicus_request_1'] = function (block) {
    
    var number_day = block.getFieldValue('DAY');
    var number_month = block.getFieldValue('MONTH') - 1;
    var number_year = block.getFieldValue('YEAR');

    var block_date = "new Date(" + number_year + "," + number_month + "," + number_day + ")";
    var block_topic = Blockly.JavaScript.valueToCode(block, 'THEME', Blockly.JavaScript.ORDER_ATOMIC);
    var block_area = Blockly.JavaScript.valueToCode(block, 'AREA', Blockly.JavaScript.ORDER_ATOMIC);

    var code = "launchCopernicusRequest(" + block_topic + ", " + block_date + ", " + block_area + ");";

    return code;
};

/** COPERNICUS REQUEST FULL PARAMETERS block definition */
Blockly.Blocks['copernicus_request_2'] = {
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
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


/** COPERNICUS REQUEST FULL PARAMETERS block associated method */
Blockly.JavaScript['copernicus_request_2'] = function (block) {

    var block_date = Blockly.JavaScript.valueToCode(block, 'DATE', Blockly.JavaScript.ORDER_ATOMIC);
    var block_topic = Blockly.JavaScript.valueToCode(block, 'THEME', Blockly.JavaScript.ORDER_ATOMIC);
    var block_area = Blockly.JavaScript.valueToCode(block, 'AREA', Blockly.JavaScript.ORDER_ATOMIC);

    var code = "launchCopernicusRequest(" + block_topic + ", " + block_date + ", " + block_area + ");";

    return code;
};