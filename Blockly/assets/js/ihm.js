/** 
 * @file IHM
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/** 
 * @file IHM management
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

var zoom;

/** Initialise the ihm interface actions */
$(document).ready(function () {

    zoom = false;

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

function doZoom() {
    if (isInMax()){
        minimize();
    } else {
        maximize();
    }
}

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

function isInMax() {
    var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;
    if (full_screen_element === null)
        return false;
    else
        return true;
}

$(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function() {
	if(isInMax()) {
        $('#canvas-display').css("height", "1000px");
        $('#button-min-max').attr("src", "assets/img/minimize.png");
	}
	else {
        $('#canvas-display').css("height", "500px");
        $('#button-min-max').attr("src", "assets/img/maximize.png");
	}
});