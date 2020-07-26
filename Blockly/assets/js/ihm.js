/**
 * @license
 * Copyright 2020 Noa Ammirati Maxime Dumonteil Mathis Lecoeuvre URISA
 *
 *   This file is part of Brique Copernicus.
 *
 * This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
/** 
 * @file IHM
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/** Initialise the ihm interface actions */
$(document).ready(function () {

    $('.button-info').hover(
        function () {
            $(this).animate({
                opacity: '0.7',
                height: '55px',
                width: '55px'
            });
        },
        function () {
            $(this).animate({
                opacity: '1',
                height: '45px',
                width: '45px'
            });
        }
    );

    $('.info-content').hide();

    $('#button-info-info').click(
        function () {
            $('.info-content').toggle();
        }
    );

    $('#button-info-download').click(
        function () {
            var workspace = Blockly.getMainWorkspace();
            var xml = Blockly.Xml.workspaceToDom(workspace);
            xml = Blockly.Xml.domToPrettyText(xml);
            console.log(xml);
            doAjaxRequest_download("projet.txt", xml);
        }
    );

    $('#button-max').click(
        function () {
            doZoom();
        }
    );

    $('#canvas-display').dblclick(function () {
        doZoom();
    });
});

/**
 * Do the zoom action (fullscreen or unfullscreen the display window).
 */
function doZoom() {
    if (isInMax()){
        minimize();
    } else {
        maximize();
    }
}

/**
 * Fullscreen the display window.
 */
function maximize() {
    var elem = document.getElementById('element-right-pan');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();

    }
}

/**
 * Unfullscreen the display window
 */
function minimize() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

/**
 * To know is the display window is in fullscreen mode.
 * @returns true if the display window is in fullscreen mode.
 */
function isInMax() {
    var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;
    if (full_screen_element === null)
        return false;
    else
        return true;
}

/** Called there is a change in fullscreen mode */
$(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function() {
	if(isInMax()) {
        $('#canvas-display').css("height", (window.innerHeight - 50).toString() + "px");
        $('#button-min-max').attr("src", "assets/img/minimize.png");
	}
	else {
        $('#canvas-display').css("height", "500px");
        $('#button-min-max').attr("src", "assets/img/maximize.png");
	}
});