/** 
 * @file Chart maker
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.2
 */


/**
 * Read a specified csv file via its filename and call a method when done.
 *
 * @param {*} callback the method called when done
 * @param {*} filename of the csv file
 */
function readCSVFile(callback, filename) {
    let jsonobject;
    $.ajax({
        url: filename,
        success: function (csvd) {
            var items = $.csv.toObjects(csvd, { "separator": ";" });
            var jsontext = JSON.stringify(items);
            jsonobject = JSON.parse(jsontext);
        },
        dataType: "text",
        complete: function () {
            callback(jsonobject);
        }
    });
}

/**
 * Build and display a chart is the display window.
 * 
 * @param {*} data for the chart
 */
function makeChart(data) {
    var labels = data.map(function (e) {
        return e.ObservationPeriod;
    });
    var dataGHI = data.map(function (e) {
        return e.GHI;
    });
    var dataDHI = data.map(function (e) {
        return e.DHI;
    });
    var dataBHI = data.map(function (e) {
        return e.BHI;
    });
    var dataBNI = data.map(function (e) {
        return e.BNI;
    });
    var ctxC = document.getElementById('canvas-display').getContext('2d');

    var configC = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'GHI',
                data: dataGHI,
                fill: false,
                borderColor: "#FF0040",
                backgroundColor: "#FF0040"
            }, {
                label: 'BHI',
                data: dataBHI,
                fill: false,
                borderColor: "#FF8000",
                backgroundColor: "#FF8000"
            }, {
                label: 'BNI',
                data: dataBNI,
                fill: false,
                borderColor: "#0040FF",
                backgroundColor: "#0040FF"
            }, {
                label: 'DHI',
                data: dataDHI,
                fill: false,
                borderColor: "#00FF00",
                backgroundColor: "#00FF00"
            }]
        }
    };
    new Chart(ctxC, configC);
}
