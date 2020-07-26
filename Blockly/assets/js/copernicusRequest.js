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
 * @file upload
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

var req_isOk = true; 
var downloadedFileName = "";
var req_format = "";
var varName = "";//variable used in the process part of the request

/**
 * to create and run the python script which do the request to the copernicus API
 * according to the parameters topic, date, and area
 *
 * @param {*} topic topic of request's data
 * @param {*} date date of request's data
 * @param {*} area area of request's data (example: coordinates, latitude and logitude, ...)
 */
var launchCopernicusRequest = function(topic, date, area){
    //to create correct code of the python script
    var scriptComplete = createCopernicusRequest(topic, date, area);

    //to create the python script file
    doAjaxRequest_download("copernicus_request.py", scriptComplete);

    //to execute the python script
    doAjaxRequest_executePython("copernicus_request.py");

    //to send a feedback on the front page
    $('#disp-request').html('La requête est envoyée...');
    setTimeout("$(\'#disp-request\').html(\'\');", 10000);
}

/**
 * to create correct code of the python script
 *
 * @param {*} topic topic of request's data
 * @param {*} date date of request's data
 * @param {*} area area of request's data (example: coordinates, latitude and logitude, ...)
 * @returns content, code of the script which download, compute, process and store data
 */
var createCopernicusRequest = function (topic, date, area){    
    //to select the correct topic and the correct data set
    var req_topic = '';
    var req_otherContent = '';
    var api_origin = '';

    //switch to get correct real request's parameters according to the topic
    switch (topic){
        case 'thematic_atmosphere_pollution_particulate':
            req_topic = "'cams-europe-air-quality-forecasts'";
            req_otherContent = "\t\t" + "'variable': 'particulate_matter_2.5um',\n" 
                + "\t\t" + '\'model\': [\n' 
                + "\t\t" + '\'ensemble\',\n' + "\t\t" + '],\n'
                + "\t\t" + '\'level\': \'0\',\n'
                + "\t\t" + '\'type\': \'forecast\',\n'
                + "\t\t" + '\'time\': \'00:00\',\n'
                + "\t\t" + '\'leadtime_hour\': \'4\',\n';
            
            dateIsSplit = false;
            downloadedFileName = "download.nc";
            req_format = "'netcdf'";
            api_origin = 'atmosphere';
            varName = 'pm2p5_conc';
            break;

        case 'thematic_atmosphere_ozone':
            req_topic = "'cams-global-reanalysis-eac4-monthly'";
            req_otherContent = "\t\t" + "'variable': 'total_column_ozone',\n" 
                + "\t\t" + "'product_type': 'monthly_mean',\n";

            req_format = "'netcdf'";
            downloadedFileName = "download.nc";
            dateIsSplit = true;
            api_origin = 'atmosphere';
            varName = "gtco3";
            break;

        case 'thematic_atmosphere_temperature':
            req_topic = "'cams-global-reanalysis-eac4'";
            req_otherContent = "\t\t" + "'variable': '2m_temperature',\n" 
                + "\t\t" + "'time': '00:00',\n";

            req_format = "'netcdf'";
            downloadedFileName = "download.nc";
            dateIsSplit = false;
            api_origin = 'atmosphere';
            varName = 't2m';
            break;

        case 'thematic_atmosphere_solar_radiation':
            req_topic = "'cams-solar-radiation-timeseries'";
            req_otherContent = "\t\t" + "'sky_type': 'observed_cloud',\n" 
                + "\t\t" + "'altitude': '-999.', #default value\n"
                + "\t\t" + "'time_step': '1month', #time step to change\n"
                + "\t\t" + "'time_reference': 'true_solar_time',\n";
            
            dateIsSplit = false;
            downloadedFileName = "download.csv";
            req_format = "'csv'";
            api_origin = 'atmosphere';
            //here varName is not necessary because it's not a netcdf
            break;

        default:
            alert("Error : request not valid topic, request aborted | le thème n'est pas valide, requête annulée");
            req_isOK = false;
    }
    
    //compute the date for the request 
    var req_date = computeReqDate(topic, date);

    //compute the coordonate of the area
    var req_area = computeReqArea(area);
    
    //add the api key to the script
    switch(api_origin){
        case 'atmosphere':
            api_url = "https://ads.atmosphere.copernicus.eu/api/v2";
            api_key = api_key_atmosphere;
            break;
        case 'climate':
            api_url = "https://cds.climate.copernicus.eu/api/v2";
            api_key = api_key_climate;
            break;
        default:
            alert("Error : request not valid topic, request aborted | le thème n'est pas valide, requête annulée");
            req_isOK = false;
    }

    var req_beginning = "import cdsapi\n"
        + "c = cdsapi.Client(url='" + api_url + "', key='" + api_key + "')\n"
        + "c.retrieve(\n\t";

    //compute the final request
    if(req_isOk){
        var req_final = req_beginning + req_topic 
            + ",\n\t{\n" + req_otherContent 
            + "\t\t" + req_date
            + req_area
            + '\t\t\'format\': ' + req_format +",\n"
            + "\t},\n\t'"
            + downloadedFileName + "')";
    } else {
        alert("Error : when compute the request | problème lors de la formation de la requête");
    }

    //add process part of the script
    var scriptContent_process = "";
    if(req_format == "'netcdf'"){
        scriptContent_process = createContentForProcessPart(topic, date, area);
    }
    //add store part of the script
    scriptContent_process += createContentForStorePart(topic, area);

    //add clean part of the script
    scriptContent_process += createContentForCleanPart();

    return req_final + "\n\n" + scriptContent_process;
}

/**
 * to compute date's synthax for the request according to the date parameter if the date have a splitted synthax
 * and compute the downloaded file name. Date could be a single date or a period
 *
 * @param {*} date_start date of request's data (period start date if it's not a single date)
 * @param {*} date_end period end date if it's a period or same date value if it's a single date
 * @returns date's synthax for the request
 */
function computeDatePeriod(date_start, date_end){
    var start_year = date_start.getFullYear();
    var end_year = date_end.getFullYear();
    var start_month = refactorDate(date_start.getMonth() + 1);
    var end_month = refactorDate(date_end.getMonth() + 1);
    var start_day = refactorDate(date_start.getDate());
    var end_day = refactorDate(date_end.getDate());

    //if the case of csv file, file name is the date, so it's easier (but not better) to compute it here thanks to the var
    if(req_format == "'csv'"){
        downloadedFileName = "./tmp/" + start_day +"-"+ start_month +"-"+ start_year
            + "_" + end_day +"-"+ end_month +"-"+ end_year +".csv"; 
    }
    return("'date': '" + start_year +"-"+ start_month +"-"+ start_day
        +"/"+ end_year +"-"+ end_month +"-"+ end_day +"',\n");
}

/**
 * to compute date's synthax for the request according to the date parameter 
 * if the date don't have a splitted synthax and check if the date is correct.
 * Date could be a single date or a period 
 *
 * @param {*} topic topic of request's data
 * @param {*} date date of request's data
 * @returns date's synthax for the request
 */
function computeReqDate(topic, date){
    //necessary variables
    var req_date = "";
    var dateIsSplit = true;
    var dateIsOk = true;
    var dateIsPeriod = date.constructor.name == "PeriodValue";

    //get good variables if date is a period or not
    var dateToTest = date;
    var dateToTest_end = true; //if the date is not a period, the variable still a boolean and it simplify the final date's check
    var minDate, maxDate; //this variable is the minimum value of the date to be valid
    if(dateIsPeriod){
        dateToTest = date.start; //dateToTest become start date of the period
        dateToTest_end = date.end; //if the date is a period, the variable become a date in order to check it 
    }

    //check if the date is valid according to the request possiblities
    switch (topic){
        case 'thematic_atmosphere_pollution_particulate':
            minDate = new Date('2017', '06');
            maxDate = new Date('2020', '06', '08');//maybe today's date
            dateIsSplit = false;
            break;

        case 'thematic_atmosphere_ozone':
            minDate = new Date('2003');
            maxDate = new Date('2019');
            dateIsSplit = true;
            break;

        case 'thematic_atmosphere_temperature':
            minDate = new Date('2003');
            maxDate = new Date('2019');
            dateIsSplit = false;
            break;

        case 'thematic_atmosphere_solar_radiation':
            minDate = new Date('2004');
            maxDate = new Date('2020', '06', '06');//maybe today's date
            dateIsSplit = false;
            break;

        default:
            alert("Error : date is not valid, request aborted | la date n'est pas valide, requête annulée");
            req_isOK = false;
    }
    if(dateIsPeriod){
        dateToTest_end = compareDate(dateToTest_end, minDate, maxDate);
    }
    dateIsOk = compareDate(dateToTest, minDate, maxDate) && dateToTest_end;

    //compute the date if it is valid
    if(dateIsOk){
        if(dateIsSplit){
            var date_day = refactorDate(date.getDate()); //1-31
            var date_month = refactorDate(date.getMonth()+1); //0-11
            var date_year = date.getFullYear();
            req_date = "'month': '" + date_month + "',\n\t\t'year': '" + date_year + "',\n\t\t"
                + "'day': '" + date_day + "',\n"; // i'm not really sure to add the day, TO TEST, because every request don't have the day 
        } else {// if !dateIsSplit 
            if(dateIsPeriod){//if the date is a PeriodValue object
                req_date = computeDatePeriod(date.start, date.end);
            }else{//if the request need a period but it only have one date
                req_date = computeDatePeriod(date, date);
            }
        }
    } else {
        alert("Error : date is not valid, request aborted | la date n'est pas valide, requête annulée");
    }

    return req_date;
}


/**
 * to compare two date. Return true if the date is between minimum and maximum
 *
 * @param {*} dateToTest date to test
 * @param {*} minDate minimum date
 * @param {*} maxDate maximum date
 * @returns true if the date is between minimum and maximum
 */
function compareDate(dateToTest, minDate, maxDate){
    return ( ( (maxDate > dateToTest) || (maxDate.getTime() === dateToTest.getTime()) ) && ( (minDate < dateToTest) || (minDate.getTime() === dateToTest.getTime()) ));
}

/**
 * to create the part of the script's content that handles the processing according to the parameter
 *
 * @param {*} topic topic of request's data
 * @param {*} date date of request's data
 * @param {*} area area of request's data (example: coordinates, latitude and logitude, ...)
 * @returns part of the script's content that handles the processing
 */
function createContentForProcessPart(topic, date, area){
    var scriptContent = '';

    //compute the image file name
    var imageName = refactorDate(date.getDate()) +"-"+ refactorDate(date.getMonth()+1) +"-"+ date.getFullYear();

    //add "import" part
    scriptContent += "import netCDF4 \n"
        + "import numpy as np\n"
        + "import matplotlib.pylab as plt\n"
        + "from matplotlib import cm\n"
        + "from mpl_toolkits.basemap import Basemap,shiftgrid\n"
        + "import sys, os\n\n";
    
    //add "set variables" part
    scriptContent += "# set up the figure\nplt.figure()\n"
        + "#Get value from nc file\n"
        + "url='download.nc'\n"
        + "file = netCDF4.Dataset(url)\n"
        + "lat  = file.variables['latitude'][:]\n"
        + "lon  = file.variables['longitude'][:]\n"
        + "data = file.variables['"+ varName +"'][0,:,:]\n" // to change
        + "file.close()\n\n";

    //add "set figure and map" part
    scriptContent += "#Setup figure and map\n"
        + "fig=plt.figure(figsize=(12, 8))\n"
        + "m=Basemap(projection='mill',lat_ts=10,llcrnrlon=lon.min(),"
        + "  urcrnrlon=lon.max(),llcrnrlat=lat.min(),urcrnrlat=lat.max(),"
        + "  resolution='c')\n\n";

    //add "plot the field" part
    scriptContent += "# convert the lat/lon values to x/y projections.\n"
        + "x, y = m(*np.meshgrid(lon,lat))\n\n"
        + "# plot the field using the fast pcolormesh routine set the colormap to jet.\n";

    if(topic == 'thematic_atmosphere_pollution_particulate'){//this topic dont work and have to be fixed
        //in order to not block the execution, we change this line in the script but the image is the not correct
        scriptContent += "m.pcolormesh(x,y,np.squeeze(data),shading='flat',cmap=plt.cm.jet)\n";
    } else {
        scriptContent += "m.pcolormesh(x,y,data,shading='flat',cmap=plt.cm.jet)\n";
    }

    scriptContent +=  "m.colorbar(location='right')\n\n";

    //add "set background" part
    scriptContent += "# Add a coastline and axis values.\n"
        + "m.drawcoastlines()\n"
        + "#m.fillcontinents()\n"
        + "m.drawmapboundary()\n"
        + "m.drawparallels(np.arange(-90.,90.,30.),labels=[1,0,0,0])\n"
        + "m.drawmeridians(np.arange(-180.,180.,60.),labels=[0,0,0,1])\n\n";

    //add the last part
    scriptContent += "# Add a colorbar and title, and then show the plot.\n"
        + "plt.title('" + topic + "');\n"  //to change
        + "plt.savefig(" +"'./tmp/"+ imageName +".png', bbox_inches=0)\n\n"

    
    return scriptContent;
}

/**
 * to create the part of the script's content that store te processed data according to the parameter
 *
 * @param {*} topic topic of request's data
 * @param {*} area area of request's data (example: coordinates, latitude and logitude, ...)
 * @returns part of the script's content that store te processed data
 */
function createContentForStorePart(topic, area){
    var zone = area.name; // has to follow area value
    var dirDest = "'./mesImages/Copernicus/" + topic + "/" + zone + "/'\n";    

    var scriptContent = "import os\nimport shutil \n"
        + "dirOrigin = './tmp/'\n"
        + "dirDest = " + dirDest
        + "if not os.path.isdir(dirDest):\n"
        + "\t os.makedirs(dirDest)\n"
        + "\t print('Creation reussie du repertoire', dirDest)\n"
        + "files = os.listdir(dirOrigin)\n"
        + "for f in files:\n"
        + "\t shutil.move( os.path.join(dirOrigin, f), os.path.join(dirDest, f) )";
    
    return scriptContent;
}

/**
 * to refactor the date because in the request if the value is under 10, the synthax is "01" instead of "1" 
 *
 * @param {*} num date value
 * @returns refactored date value
 */
function refactorDate(num){
    if(num < 10){
        num = "0"+num;
    }
    return num;
}

/**
 * to compute area's synthax for the request according to the area parameter
 *
 * @param {*} area area of request's data (example: coordinates, latitude and logitude, ...)
 * @returns computed area's synthax for the request
 */
function computeReqArea(area){
    var area_n = area.north;
    var area_s = area.south;
    var area_e = area.east;
    var area_w = area.west;
    var req_area = "";

    if(req_format == "'csv'"){
        req_area = "\t\t'location': {"
            + "\t'latitude': 0.00002,"
            + "\t'longitude': -0.00002,"
            + "\t},\n";
    } else if (area.name != "world"){
        req_area = "\t\t'area': [\n" 
            + "\t\t\t" + area_n +", "+ area_w +", "+ area_s +", " + area_e +",\n\t\t],\n";
    }

    return req_area;
}

/**
 * to create the part of the script's content that handles the cleaning 
 * (remove useless file after downloading, computing, processing and storing)
 *
 * @returns part of the script's content that handles the cleaning 
 */
function createContentForCleanPart(){
    var reqContent = "\n\nimport shutil, os, sys\n\n"; //maybe only keep "import os"   
    if(req_format == "'netcdf'"){
        reqContent += "os.remove('download.nc')\n";
    }
    reqContent += "os.remove('copernicus_request.py')\n"
    return reqContent;
}