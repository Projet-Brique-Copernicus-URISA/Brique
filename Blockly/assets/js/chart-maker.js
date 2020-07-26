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
