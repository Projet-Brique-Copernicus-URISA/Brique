/** 
 * @file upload
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

// TODO : COMMENTAIRES a intégrer


$(document).ready(function () {
    var input = document.getElementById("button-input-upload");

    input.onchange = function () {
        var workspace = Blockly.getMainWorkspace()
        var code = Blockly.Xml.workspaceToDom(workspace);
        code = Blockly.Xml.domToPrettyText(code);
        console.log(code);
        var file = input.files[0];
        var FR = new FileReader();
        FR.readAsText(file);
        FR.onload = function () {
            var xml = Blockly.Xml.textToDom(FR.result);
            Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace)

        };
    };
});