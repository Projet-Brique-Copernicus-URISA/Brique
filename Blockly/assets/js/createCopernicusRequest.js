/**
 *
 *
 * @param {*} topic
 * @param {*} date
 * @param {*} area
 */
var createCopernicusRequest = function(topic, date, area){
    //beginning of the python request code
    var req_beginning = "import cdsapi\nc = cdsapi.Client()\nc.retrieve(\"";
    
    // variables for the request
    var req_format = "'netcdf'";
    var req_isOk = true; 

    //to select the correct topic and the correct data set
    var req_topic = '';
    switch (topic){
        case 'thematic_atmosphere_pollution_particulate':
            req_topic = 'cams-europe-air-quality-forecasts';
            break;
        case 'thematic_atmosphere_ozone':
            req_topic = 'cams-global-reanalysis-eac4-monthly';
            break;
        case 'thematic_atmosphere_temperature':
            req_topic = 'cams-global-reanalysis-eac4';
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
        req_date = "'month': '" + date_month + "',\n'year': '" + date_year + "',\n"
            + "'day': '" + date_day + "',\n"; // i'm not really sure to add the day, TO TEST, because every request don't have the day 
    } else {// if !dateIsSplit 
        //so date is a PeriodValue object
        var date_start = date.start;
        var date_end = date.end;

        //it's maybe not correct due to the month (0-11)
        req_date = date_start.getFullYear +"-"+ date_start.getMonth +"-"+ date_start.getDate
            +"/"+ date_end.getFullYear +"-"+ date_end.getMonth +"-"+ date_end.getDate;
    }

    //compute the coordonate of the area
    // is the name important in the request ?
    var area_n = area.north;
    var area_s = area.south;
    var area_e = area.east;
    var area_w = area.west;

    var req_area = area_n +", "+ area_w +", "+ area_s +",\n"+ area_e;

    //compute the final request
    if(req_isOK){

    }

    console.log(date);
    console.log(zone);
    console.log(theme);
}