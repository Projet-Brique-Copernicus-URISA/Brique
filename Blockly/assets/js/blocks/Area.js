/** 
 * @file Areas Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */


 /** WORLD block definition */
Blockly.Blocks['area_world'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput().appendField('Monde');
    }
};

/** WORLD block associated method */
Blockly.JavaScript['area_world'] = function () {
    var code = "new Area('world'," + 0 + "," + 0 + "," + 0 + "," + 0 + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};
/** EUROPE block definition */
Blockly.Blocks['area_europe'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput().appendField('Europe');
    }
};

/** EUROPE block associated method */
Blockly.JavaScript['area_europe'] = function () {
    var code = "new Area('europe'," + 75 + "," + 30 + "," + 45 + "," + -25 + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

/** FRANCE block definition */
Blockly.Blocks['area_france'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput().appendField('France');
    }
};

/** FRANCE block associated method */
Blockly.JavaScript['area_france'] = function () {
    var code = "new Area('france'," + 52 + "," + 41 + "," + 10 + "," + -6 + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

/** PARIS block definition */
Blockly.Blocks['area_paris'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput().appendField('FRANCE - Paris');
    }
};

/** PARIS block associated method */
Blockly.JavaScript['area_paris'] = function () {
    var code = "new Area('paris'," + 49.4 + "," + 48 + "," + 3.7 + "," + 1.3 + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};


/** NOUVELLE_AQUITAINE block definition */
Blockly.Blocks['area_nouvelleaquitaine'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput().appendField('FRANCE - Nouvelle Aquitaine');
    }
};

/** NOUVELLE_AQUITAINE block associated method */
Blockly.JavaScript['area_nouvelleaquitaine'] = function () {
    var code = "new Area('nouvelleaquitaine'," + 47.3 + "," + 42.5 + "," + 3 + "," + -2 + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};


/** ITALY block definition */
Blockly.Blocks['area_italy'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput().appendField('Italie');
    }
};

/** ITALY block associated method */
Blockly.JavaScript['area_italy'] = function () {
    var code = "new Area('italy'," + 48 + "," + 36 + "," + 20 + "," + 6 + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

/** GREAT BRITAIN block definition */
Blockly.Blocks['area_gb'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput().appendField('Grande Bretagne');
    }
};

/** GREAT BRITAIN block associated method */
Blockly.JavaScript['area_gb'] = function () {
    var code = "new Area('gb'," + 61.5 + "," + 49 + "," + 4 + "," + -13 + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};


/** SCANDINAVIA block definition */
Blockly.Blocks['area_scandinavia'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput().appendField('Scandinavie');
    }
};

/** SCANDINAVIA block associated method */
Blockly.JavaScript['area_scandinavia'] = function () {
    var code = "new Area('scandinavia'," + 72 + "," + 54 + "," + 45 + "," + 2 + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

/** IBERIAN PENINSULA block definition */
Blockly.Blocks['area_iber'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput().appendField('Péninsule Ibérique');
    }
};

/** IBERIAN PENINSULA block associated method */
Blockly.JavaScript['area_iber'] = function () {
    var code = "new Area('iber'," + 44.5 + "," + 35 + "," + 5 + "," + -10.5 + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

/** GERMANY block definition */
Blockly.Blocks['area_germany'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput().appendField('Allemagne');
    }
};

/** GERMANY block associated method */
Blockly.JavaScript['area_germany'] = function () {
    var code = "new Area('germany'," + 55.5 + "," + 45.5 + "," + 16 + "," + 5 + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

/** CUSTOM AREA block definition */
Blockly.Blocks['area_custom'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput()
            .appendField('Zone ')
            .appendField(new Blockly.FieldTextInput("ma zone"), "NAME");
        this.appendDummyInput()
            .appendField('Nord :')
            .appendField(new Blockly.FieldNumber(0, 31, 72), "NORTH")
            .appendField('Sud :')
            .appendField(new Blockly.FieldNumber(0, 30, 71), "SOUTH")
            .appendField('Est :')
            .appendField(new Blockly.FieldNumber(0, -24, 45), "EAST")
            .appendField('Ouest :')
            .appendField(new Blockly.FieldNumber(0, -25, 44), "WEST");
    }
};

/** CUSTOM AREA block associated method */
Blockly.JavaScript['area_custom'] = function () {
    let input_name = block.getFieldValue('NAME');
    let input_north = block.getFieldValue('NORTH');
    let input_south = block.getFieldValue('SOUTH');
    let input_east = block.getFieldValue('EAST');
    let input_west = block.getFieldValue('WEST');
    // TODO : TESTER SI LA ZONE EST VALIDE nord > sud et est < ouest
    var code = "new Area(" + input_name + "," + input_north + "," + input_south + "," + input_east + "," + input_west + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

class Area {
    constructor(name, north, south, east, west) {
        this.name = name;
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
    }

}