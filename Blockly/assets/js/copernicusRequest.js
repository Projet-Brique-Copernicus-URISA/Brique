/**
 * to create and run the python script which do the request to the copernicus API
 * according to the parameters topic, date, and area
 *
 * @param {*} topic 
 * @param {*} date
 * @param {*} area
 */
var launchCopernicusRequest = function(topic, date, area){
    //to create correct code of the python script
    var req_final = createCopernicusRequest(topic, date, area);
    var scriptContent_process = createContentForProcessPart(topic, date, area);
    var scriptComplete = req_final + "\n\n" + scriptContent_process;

    //to create the python script file
    doAjaxRequest_download("copernicus_request.py", scriptComplete);

    //to execute the python script
    doAjaxRequest_executePython("copernicus_request.py");
}

/**
 * to create correct code of the python script
 *
 * @param {*} topic
 * @param {*} date
 * @param {*} area
 * @returns
 */
var createCopernicusRequest = function (topic, date, area){
    //beginning of the python request code
    var req_beginning = "import cdsapi\nc = cdsapi.Client()\nc.retrieve(\n\t";
    
    // variables for the request
    var downloadedFileName = "tmp/download.nc";//i have to change this line
    var req_format = "'netcdf'";
    var req_isOk = true; 
    var dateIsSplit = true;

    //to select the correct topic and the correct data set
    var req_topic = '';
    var req_otherContent = '';
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
            break;

        case 'thematic_atmosphere_ozone':
            req_topic = "'cams-global-reanalysis-eac4-monthly'";
            req_otherContent = "\t\t" + "'variable': 'total_column_ozone',\n" 
                + "\t\t" + "'product_type': 'monthly_mean',\n";
            dateIsSplit = true;
            break;

        case 'thematic_atmosphere_temperature':
            req_topic = "'cams-global-reanalysis-eac4'";
            req_otherContent = "\t\t" + "'variable': '2m_temperature',\n" 
                + "\t\t" + "'time': '00:00',\n";
            dateIsSplit = false;
            break;
        default:
            alert("Error : request not valid topic, request aborted | le thème n'est pas valide, requête annulée");
            req_isOK = false;
    }
    
    //compute the date for the request 
    var req_date = '';

    if(dateIsSplit){
        var date_day = date.getDate(); //1-31
        var date_month = date.getMonth(); //0-11
        var date_year = date.getFullYear();
        req_date = "\t\t" + "'month': '" + date_month + "',\n\t\t'year': '" + date_year + "',\n\t\t"
            + "'day': '" + date_day + "',\n"; // i'm not really sure to add the day, TO TEST, because every request don't have the day 
    } else {// if !dateIsSplit 

        if(date.constructor.name == "Date"){//if the request need a period but it only have one date
            req_date = computeDatePeriod(date, date);
        }else{//if the date is a PeriodValue object
            req_date = computeDatePeriod(date.start, date.end);
        }
    }

    //compute the coordonate of the area
    // is the name important in the request ?
    var area_n = area.north;
    var area_s = area.south;
    var area_e = area.east;
    var area_w = area.west;

    var req_area = "'area': [\n" 
        + "\t\t\t" + area_n +", "+ area_w +", "+ area_s +", " + area_e +",\n\t\t],\n";

    //compute the final request
    if(req_isOk){
        var req_final = req_beginning + req_topic 
            + ",\n\t{\n" + req_otherContent 
            + "\t\t" + req_date
            + "\t\t" + req_area
            + '\t\t\'format\': ' + req_format +",\n"
            + "\t},\n\t'"
            + downloadedFileName + "')";
    } else {
        alert("Error : when compute the request | problème lors de la formation de la requête");
    }

    return req_final;
}

/**
 *
 *
 * @param {*} date_start
 * @param {*} date_end
 * @returns
 */
function computeDatePeriod(date_start, date_end){
    //it's maybe not correct due to the month (0-11)
    return("'date': '" + date_start.getFullYear() +"-"+ date_start.getMonth() +"-"+ date_start.getDate()
        +"/"+ date_end.getFullYear() +"-"+ date_end.getMonth() +"-"+ date_end.getDate() +"',\n");
}

/**
 *
 *
 * @param {*} topic
 * @param {*} date
 * @param {*} area
 * @returns
 */
function createContentForProcessPart(topic, date, area){
    var scriptContent = '';
    
    var varName = "gtco3";
    var imageName = date.getDate() +"-"+ date.getMonth() +"-"+ date.getFullYear();

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
        + "data = file.variables['"+ varName +"'][0,:,:]\n\n" // to change

    //add "set figure and map" part
    scriptContent += "#Setup figure and map\n"
        + "fig=plt.figure(figsize=(12, 8))\n"
        + "m=Basemap(projection='mill',lat_ts=10,llcrnrlon=lon.min(),"
        + "  urcrnrlon=lon.max(),llcrnrlat=lat.min(),urcrnrlat=lat.max(),"
        + "  resolution='c')\n\n";

    //add "plot the field" part
    scriptContent += "# convert the lat/lon values to x/y projections.\n"
        + "x, y = m(*np.meshgrid(lon,lat))\n\n"
        + "# plot the field using the fast pcolormesh routine set the colormap to jet.\n"
        + "m.pcolormesh(x,y,data,shading='flat',cmap=plt.cm.jet)\n"
        + "m.colorbar(location='right')\n\n";

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

    //add "clean and move part"
    /*
    scriptContent += "import shutil, os, sys\n\n"
        + "#move download.nc to /tmp\n"
        + "shutil.move('" + imageName + ".png', 'tmp/')\n\n"
        + "#remove copernicus_request.py and download.nc\n"
        + "os.remove('download.nc')\n"
        //+ "os.remove('copernicus_request.py')\n"
        */
    return scriptContent;
}
