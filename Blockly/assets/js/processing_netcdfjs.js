const fs = require('fs');
const NetCDFReader = require('netcdfjs');

// http://www.unidata.ucar.edu/software/netcdf/examples/files.html
const data = fs.readFileSync('download.nc');

var reader = new NetCDFReader(data); // read the header
reader.getDataVariable('gtco3'); // go to offset and read it

/*
'use strict';

const fs = require('fs');
const join = require('path').join;

const NetCDFReader = require('../src');

const data = fs.readFileSync(
  join(__dirname, '../src/__tests__/files/agilent_hplc.cdf')
);

let reader = new NetCDFReader(data);

let selectedVariable = reader.variables[4];

reader.getDataVariable(selectedVariable);

for (let variable of reader.variables) {
  console.log(variable.name, reader.getDataVariable(variable));
}

let ordinates = reader.getDataVariable(reader.variables[5]);
console.log(Math.max(...ordinates));
console.log(Math.min(...ordinates));
*/