/** 
 * @file Areas Blocks
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/** PARIS block definition */
Blockly.Blocks['area_paris'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput().appendField('FR - Paris');
    }
};

/** PARIS block associated method */
Blockly.JavaScript['area_paris'] = function () {
    // TODO
    return "new Area(\"paris\", " + north + ", " + south + ", " + east + ", " + west + ");";
};

/** NEW YORK block definition */
Blockly.Blocks['area_france'] = {
    init: function () {
        this.setOutput(true, 'area');
        this.setColour(100);
        this.appendDummyInput().appendField('France');
    }
};

/** NEW YORK block associated method */
Blockly.JavaScript['area_france'] = function () {
    // TODO
    return "new Area(\"france\", " + north + ", " + south + ", " + east + ", " + west + ");";
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
    return "doAreaCustom(" + input_name + ", " + input_north + ", " + input_south + ", " + input_east + ", " + input_west + ");";
};


function doAreaCustom(name, north, south, east, west) {
    if (north > south && east < west) {
        return new Area(name, north, south, east, west);
    } else {
        // ERROR
        alert("Zone géographique incorrecte");
    }
}

class Area {
    constructor(name, north, south, east, west) {
        this.name = name;
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
    }

}