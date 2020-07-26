::    Copyright 2020 Noa Ammirati Maxime Dumonteil Mathis Lecoeuvre URISA
::
::    This file is part of Brique Copernicus.
::
::    This program is free software: you can redistribute it and/or modify
::    it under the terms of the GNU General Public License as published by
::    the Free Software Foundation, either version 3 of the License, or
::    ^(at your option^) any later version.
::
::    This program is distributed in the hope that it will be useful,
::    but WITHOUT ANY WARRANTY; without even the implied warranty of
::    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
::    GNU General Public License for more details.
::
::    You should have received a copy of the GNU General Public License
::    along with this program.  If not, see ^<https://www.gnu.org/licenses/^>.
CALL date /t >> Blockly/log/log_preinstall.txt

CALL echo "- - - express"  >> Blockly/log/log_preinstall.txt
CALL npm install express >> Blockly/log/log_preinstall.txt

CALL echo "- - - body-parser"  >> Blockly/log/log_preinstall.txt
CALL npm install --save body-parser >> Blockly/log/log_preinstall.txt

CALL echo "- - - fs"  >> Blockly/log/log_preinstall.txt
CALL npm install fs >> Blockly/log/log_preinstall.txt

CALL echo "- - - url"  >> Blockly/log/log_preinstall.txt
CALL npm install url >> Blockly/log/log_preinstall.txt

CALL echo "- - - cdsapi"  >> Blockly/log/log_preinstall.txt
CALL pip install cdsapi >> Blockly/log/log_preinstall.txt

CALL echo "- - - netCDF4"  >> Blockly/log/log_preinstall.txt
CALL pip install netCDF4 >> Blockly/log/log_preinstall.txt

CALL echo "- - - numpy"  >> Blockly/log/log_preinstall.txt
CALL pip install numpy >> Blockly/log/log_preinstall.txt

CALL echo "- - - matplotlib"  >> Blockly/log/log_preinstall.txt
CALL pip install matplotlib >> Blockly/log/log_preinstall.txt

CALL echo "- - - basemap"  >> Blockly/log/log_preinstall.txt
CALL pip install basemap >> Blockly/log/log_preinstall.txt