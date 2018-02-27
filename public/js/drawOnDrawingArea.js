
// This function creates a DrawEngine object and calls its functions

function DrawEngineCreation(numberDivsPerRow, numberDivsPerColumn){
    var DE = new DrawEngine(numberDivsPerRow, numberDivsPerColumn);
    window.numberDivsPerRow = numberDivsPerRow;
    window.numberDivsPerColumn = numberDivsPerColumn;
    DE.addDivsToArray();
    return DE
}

function get_hex_values(){
    return "#"+document.getElementsByClassName("colorpicker_hex")[0].childNodes[0].value
}

// The DrawEngine object creates event listeners for all singleDivs and changes their color
function DrawEngine(numberDivsPerRow, numberDivsPerColumn){

    // Number of divs per row and column
    this.numberDivsPerRow = numberDivsPerRow;
    this.numberDivsPerColumn = numberDivsPerColumn;

    var drawing = false;


    //Changes color of clicked square!
    function mouse_over_handler(i,j){
        if (drawing){
            console.log(i+", "+j+" moused over");
            hex_val = get_hex_values();
            element = document.getElementById(i+":"+j);
            element.style.backgroundColor = hex_val;
        }
    }

    // Iterates through all singleDivs and adds event listeners
    this.addDivsToArray = function(){
        for (i = 0; i < this.numberDivsPerRow; i++) {
            for (j = 0; j < this.numberDivsPerColumn; j++) {

                var mouse_over_gate = function(i,j) {
                    return function(){
                        mouse_over_handler(i,j);
                    }
                };

                id=(i+":"+j).toString();
                document.getElementById(id).addEventListener("mouseover",mouse_over_gate(i,j),false);
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
    };



    // ------------------ text input

    a = [[0,0,0,0],[0,0,0,0],[1,1,1,0],[1,0,1,0],[1,0,1,0],[1,0,1,1],[1,1,0,1]];
    b = [[0,0,0],[1,0,0],[1,0,0],[1,0,0],[1,1,0],[1,0,1],[1,1,0]];
    c = [[0,0,0],[0,0,0],[0,0,0],[0,1,1],[1,0,0],[1,0,0],[0,1,1]];

    var lower_case = [ a,b,c];

    start_i = 1;
    start_j = 1;
    letter_height = 7

    /*
            ------- +i
            |
            |
            |
            +j

          Notes
            - all letters are currently 7 tall (6 is ideal but may not look good...)
     */

    this.display_text = function(){
        this.clearDrawingArea();
        text = document.getElementById("user_text").value;
        console.log(text);

        i_index = start_i;
        j_index = start_j;

        for (var i =0; i <text.length; i++){

            var str_ = text.substring(i,i+1);

            // Lower case
            if (str_ === str_.toLowerCase()){
                var lower_index = str_.charCodeAt(0) - 97;
                console.log("lowercase: "+str_+": "+lower_index);

                // Draw lower index
                if (lower_index < lower_case.length){
                    letter = lower_case[lower_index];
                    this.draw_letter(i_index,j_index,letter);

                    i_index += letter[0].length+1;

                    if (i_index > this.numberDivsPerRow - 5){
                        i_index = start_i;
                        j_index += letter_height
                    }

                }


            }
            // Upper Case
            else if (str_ === str_.toUpperCase()){
                var upper_index = str_.charCodeAt(0) - 65;
                console.log("upper: "+str_+": "+upper_index)
            }

            // Number
            else if (!isNaN(str_)) {
                var num = parseInt(str_);
                console.log("number: "+str_+": "+num)
            }

        }
    };



    this.draw_letter = function (i_idx, j_idx, letter) {


        letter_width = letter[0].length;
        letter_height = letter.length;

        if (i_idx + letter_width  > this.numberDivsPerRow ){
            i_idx = start_i;
        }

        if (j_idx + 7  > this.numberDivsPerColumn ){
            return
        }

        i_matrix = i_idx;
        j_matrix = j_idx;

        for ( j = 0; j <letter_height; j++ ){
            for (i = 0; i < letter_width; i++){

                if (letter[j][i] === 1){

                    hex_val = get_hex_values();
                    element = document.getElementById(i_matrix+":"+j_matrix);
                    element.style.backgroundColor = hex_val;


                    console.log("letter[j][i] == 1")
                }
                i_matrix += 1
            }
            j_matrix += 1;
            i_matrix = i_idx;
        }
    }




}

