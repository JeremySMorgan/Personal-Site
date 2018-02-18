
function executeDataSend(numberDivsPerRow, numberDivsPerColumn) {
    var DE = new DataSendEngine(numberDivsPerRow, numberDivsPerColumn);
    DE.sendData();
    DE.printData();
}

function DataSendEngine(numberDivsPerRow, numberDivsPerColumn) {
    this.numberDivsPerRow = numberDivsPerRow;
    this.numberDivsPerColumn = numberDivsPerColumn;

    var JSONObject = { "matrix_data": [] };
    var led_data = [];

    this.getColor = function (X, Y) {
        var trans = "tr";
        var XdivColor = "tr";
        try {
            if (this.returnHex) {
                try {
                    XdivColor = rgb2hex(document.getElementById(X + ":" + Y).style.backgroundColor);
                }
                catch (err) {
                    XdivColor = trans;
                }
            }
            else {
                XdivColor = document.getElementById(X + ":" + Y).style.backgroundColor;
                XdivColor = XdivColor.replace(/,/g, '.');
            }
        }
        catch (err) {
            XdivColor = trans;
        }
        if (XdivColor === "") {
            XdivColor = trans;
        }
        if (XdivColor === " ") {
            XdivColor = trans;
        }
        return XdivColor;
    };

    // CREATE JSON OBJECT TO SEND
    this.sendData = function () {
        xInv = true;
        count = 0;
        for (var Y = 0; Y < numberDivsPerColumn; Y++) {

            if (xInv) {
                for (var Xinvr = 0; Xinvr < numberDivsPerRow; Xinvr++) {
                    color = this.getColor(Xinvr, Y);
                    count++;
                    JSONObject.matrix_data.push({
                        COLOR: color
                    });
                    led_data.push(color)
                }
                xInv = false;
            }
            else {
                for (var X = numberDivsPerRow - 1; X >= 0; X--) {
                    color = this.getColor(X, Y);
                    count++;
                    JSONObject.matrix_data.push({
                        COLOR: color
                    });
                    led_data.push(color)
                }
                xInv = true;
            }
        }
        console.log("count: " + count);
    };

    // http send
    this.printData = function () {

        var pathArray = location.href.split("/");
        var protocol = pathArray[0];
        var host = pathArray[2];
        var url = protocol + "//" + host;
        var POST_baseurl = url + "/";

        console.log(JSONObject);
        var sendData = $.ajax({
            type: 'POST',
            url: POST_baseurl + "send_post",
            data: JSON.stringify({ paramName: led_data }),
            success: function(resultData) { console.log("Send Complete") },
            failure: function (err) {console.log("error: "+err)}
        });
    };
}
