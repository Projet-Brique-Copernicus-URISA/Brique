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
 * @file upload
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/** Upload a file and set up the BLockly code in the workspace */
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