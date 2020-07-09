


/**
 *
 *
 * @param {*} callback
 * @param {*} filename
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
