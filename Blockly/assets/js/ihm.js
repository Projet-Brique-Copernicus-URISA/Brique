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

 /** Initialise the ihm interface actions */
$( document ).ready(function() {

    $('.button-info').hover(
        function(){
            $(this).animate({
                opacity: '0.7',
                height: '55px',
                width: '55px'
            });
        },
        function(){
            $(this).animate({
                opacity: '1',
                height: '45px',
                width: '45px'
            });
        }
    );

    $('.info-content').hide();

    $('#button-info-info').click(
        function(){
            $('.info-content').toggle();
        }
    );

    $('#button-info-download').click(
        function(){
            var workspace = Blockly.getMainWorkspace();
            var xml = Blockly.Xml.workspaceToDom(workspace);
            xml = Blockly.Xml.domToPrettyText(xml);
            doAjaxRequest_download("projet.txt", xml);
        }
    );
});