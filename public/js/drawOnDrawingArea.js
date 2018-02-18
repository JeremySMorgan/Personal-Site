/**
 * Created by admin on 1/8/16.
 */


/*

 < ------------------------- ROWS ARE LEFT RIGHT ------------------------- >


 |
 |
 |
 |
 |
 |
 COLUMNS ARE UP DOWN
 |
 |
 |
 |
 |
 |

 */


// This function creates a DrawEngine object and calls its functions

function DrawEngineCreation(numberDivsPerRow, numberDivsPerColumn){

    var DE = new DrawEngine(numberDivsPerRow, numberDivsPerColumn);
    window.numberDivsPerRow = numberDivsPerRow;
    window.numberDivsPerColumn = numberDivsPerColumn;
    DE.addDivsToArray();
}

function clearDrawingArea(){
    var DE = new DrawEngine(window.numberDivsPerRow, window.numberDivsPerColumn);
    DE.clearDrawingArea();
}


function get_hex_value(){
    hex = "#"+document.getElementsByClassName("colorpicker_hex")[0].childNodes[0].value
    return hex
}



// The DrawEngine object creates event listeners for all singleDivs and changes their color
function DrawEngine(numberDivsPerRow, numberDivsPerColumn){

    // Number of divs per row and column
    this.numberDivsPerRow = numberDivsPerRow;
    this.numberDivsPerColumn = numberDivsPerColumn;

    var drawing = false;

    //Changes color of clicked square!
    function manageClick(i,j){

        if (drawing){

            hex_val = get_hex_value()

            console.log("hex value:"+hex_val)

            // Set singleDiv of concern to value of color picker
            element = document.getElementById(i+":"+j)
            element.style.backgroundColor = hex_val;
        }

    }


    // Iterates through all singleDivs and adds event listeners
    this.addDivsToArray = function(){
        for (i = 0; i < this.numberDivsPerRow; i++) {
            for (j = 0; j < this.numberDivsPerColumn; j++) {

                var divIncrement = function(i,j) {
                    return function(){
                        manageClick(i,j);}
                };

                id=(i+":"+j).toString();

                // THIS WORKS!!! JUST NOT VERY GOOD!
                document.getElementById(id).addEventListener("mouseover",divIncrement(i,j),false);

                document.body.onmousedown = function() {
                    setDrawing(true);
                };

                document.body.onmouseup = function(){
                    setDrawing(false);
                };

                function setDrawing(bool){
                    drawing = bool;
                }


            }
        }
    };


    this.clearDrawingArea = function(){
        for (i = 0; i < this.numberDivsPerRow; i++) {
            for (j = 0; j < this.numberDivsPerColumn; j++) {
                id=i+":"+j;
                document.getElementById(id).style.backgroundColor = "transparent";
            }
        }
    }


}

