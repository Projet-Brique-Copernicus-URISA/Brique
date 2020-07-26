#   Copyright 2020 Noa Ammirati Maxime Dumonteil Mathis Lecoeuvre URISA
#
#   This file is part of Brique Copernicus.
#
#   This program is free software: you can redistribute it and/or modify
#   it under the terms of the GNU General Public License as published by
#   the Free Software Foundation, either version 3 of the License, or
#   (at your option) any later version.
#
#   This program is distributed in the hope that it will be useful,
#   but WITHOUT ANY WARRANTY; without even the implied warranty of
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#   GNU General Public License for more details.
#
#   You should have received a copy of the GNU General Public License
#   along with this program.  If not, see <https://www.gnu.org/licenses/>.
date /t >> Blockly/log/log_preinstall.txt

echo "- - - express"  >> Blockly/log/log_preinstall.txt
npm install express >> Blockly/log/log_preinstall.txt

echo "- - - body-parser"  >> Blockly/log/log_preinstall.txt
npm install --save body-parser >> Blockly/log/log_preinstall.txt

echo "- - - fs"  >> Blockly/log/log_preinstall.txt
npm install fs >> Blockly/log/log_preinstall.txt

echo "- - - url"  >> Blockly/log/log_preinstall.txt
npm install url >> Blockly/log/log_preinstall.txt

echo "- - - cdsapi"  >> Blockly/log/log_preinstall.txt
pip install cdsapi >> Blockly/log/log_preinstall.txt

echo "- - - netCDF4"  >> Blockly/log/log_preinstall.txt
pip install netCDF4 >> Blockly/log/log_preinstall.txt

echo "- - - numpy"  >> Blockly/log/log_preinstall.txt
pip install numpy >> Blockly/log/log_preinstall.txt

echo "- - - matplotlib"  >> Blockly/log/log_preinstall.txt
pip install matplotlib >> Blockly/log/log_preinstall.txt

echo "- - - basemap"  >> Blockly/log/log_preinstall.txt
pip install basemap >> Blockly/log/log_preinstall.txt