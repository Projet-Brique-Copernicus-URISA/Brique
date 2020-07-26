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
 * @file Thematics Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */


// POLUTION thematic_atmosphere_pollution_particulate

/** POLLUTION block definition */
Blockly.Blocks['thematic_atmosphere_pollution_particulate'] = {
    init: function () {
        this.setOutput(true, 'theme');
        this.setColour(30);
        this.appendDummyInput().appendField('Pollution (particules fines)');
    }
};

/** POLLUTION block associated method */
Blockly.JavaScript['thematic_atmosphere_pollution_particulate'] = function () {
    var code = '\'thematic_atmosphere_pollution_particulate\'';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

// OZONE thematic_atmosphere_ozone

/** OZONE block definition */
Blockly.Blocks['thematic_atmosphere_ozone'] = {
    init: function () {
        this.setOutput(true, 'theme');
        this.setColour(30);
        this.appendDummyInput().appendField('Couche d\'ozone');
    }
};

/** OZONE block associated method */
Blockly.JavaScript['thematic_atmosphere_ozone'] = function () {
    var code = '\'thematic_atmosphere_ozone\'';
    return  [code, Blockly.JavaScript.ORDER_NONE];
};

//TEMPERATURE thematic_atmosphere_temperature

/** TEMPERATURE block definition */
Blockly.Blocks['thematic_atmosphere_temperature'] = {
    init: function () {
        this.setOutput(true, 'theme');
        this.setColour(30);
        this.appendDummyInput().appendField('Température');
    }
};

/** TEMPERATURE block associated method */
Blockly.JavaScript['thematic_atmosphere_temperature'] = function () {
    var code = '\'thematic_atmosphere_temperature\'';
    return  [code, Blockly.JavaScript.ORDER_NONE];
};

//SOLAR RADIATION thematic_solar_radiation

/** SOLAR RADIATION block definition */
Blockly.Blocks['thematic_atmosphere_solar_radiation'] = {
    init: function () {
        this.setOutput(true, 'theme');
        this.setColour(30);
        this.appendDummyInput().appendField('Radiation solaire');
    }
};

/** SOLAR RADIATION block associated method */
Blockly.JavaScript['thematic_atmosphere_solar_radiation'] = function () {
    var code = '\'thematic_atmosphere_solar_radiation\'';
    return  [code, Blockly.JavaScript.ORDER_NONE];
};