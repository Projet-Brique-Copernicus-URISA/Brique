#date
date /t >> Blockly/log/log_preinstall.txt

#node.js 
echo "- - - express"  >> Blockly/log/log_preinstall.txt
npm install express >> Blockly/log/log_preinstall.txt

echo "- - - body-parser"  >> Blockly/log/log_preinstall.txt
npm install --save body-parser >> Blockly/log/log_preinstall.txt

echo "- - - fs"  >> Blockly/log/log_preinstall.txt
npm install fs >> Blockly/log/log_preinstall.txt

#echo "- - - http"  >> Blockly/log/log_preinstall.txt
#npm install http >> Blockly/log/log_preinstall.txt

echo "- - - url"  >> Blockly/log/log_preinstall.txt
npm install url >> Blockly/log/log_preinstall.txt

#echo "- - - querystring"  >> Blockly/log/log_preinstall.txt
#npm install querystring >> Blockly/log/log_preinstall.txt

#echo "- - - netcdfjs"  >> Blockly/log/log_preinstall.txt
#npm install netcdfjs >> Blockly/log/log_preinstall.txt

#python
echo "- - - cdsapi"  >> Blockly/log/log_preinstall.txt
pip install cdsapi >> Blockly/log/log_preinstall.txt

echo "- - - netCDF4"  >> Blockly/log/log_preinstall.txt
pip install netCDF4 >> Blockly/log/log_preinstall.txt

echo "- - - numpy"  >> Blockly/log/log_preinstall.txt
pip install numpy >> Blockly/log/log_preinstall.txt

echo "- - - matplotlib"  >> Blockly/log/log_preinstall.txt
pip install matplotlib >> Blockly/log/log_preinstall.txt

#echo "- - - basemap"  >> Blockly/log/log_preinstall.txt
#pip install basemap >> Blockly/log/log_preinstall.txt #changer cette ligne