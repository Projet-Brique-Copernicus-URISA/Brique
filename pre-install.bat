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