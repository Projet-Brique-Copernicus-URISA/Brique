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