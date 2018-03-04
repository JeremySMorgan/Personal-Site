
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

    var a = [[0,0,0,0],[1,1,1,0],[0,0,1,0],[1,1,1,0],[1,0,1,0],[1,1,0,1]];
    var b = [[1,0,0],[1,0,0],[1,0,0],[1,1,0],[1,0,1],[1,1,0]];
    var c = [[0,0,0],[0,0,0],[0,1,1],[1,0,0],[1,0,0],[0,1,1]];
    var d = [[0,0,1],[0,0,1],[0,1,1],[1,0,1],[1,0,1],[0,1,1]];
    var e = [[0,1,0],[1,0,1],[1,1,0],[1,0,0],[1,0,1],[0,1,0]];
    var f = [[0,1,1],[0,1,0],[1,1,1],[0,1,0],[0,1,0],[0,1,0]];
    var g = [[0,0,0],[0,1,1],[1,0,1],[0,1,1],[0,0,1],[1,1,0]];
    var h = [[0,0,0],[1,0,0],[1,0,0],[1,1,0],[1,0,1],[1,0,1]];
    var i = [[1],[0],[1],[1],[1],[1]];
    var j = [[0,1],[0,0],[0,1],[0,1],[0,1],[1,1]];
    var k = [[1,0,0],[1,0,0],[1,0,1],[1,1,0],[1,0,1],[1,0,1]];
    var l = [[1],[1],[1],[1],[1],[1]];
    var m = [[0,0,0,0,0],[0,0,0,0,0],[0,1,0,1,0],[1,0,1,0,1],[1,0,0,0,1],[1,0,0,0,1]];
    var n = [[0,0,0],[0,0,0],[1,0,0],[1,1,1],[1,0,1],[1,0,1]];
    var o = [[0,0,0],[0,0,0],[0,1,0],[1,0,1],[1,0,1],[0,1,0]];
    var p = [[0,0,0],[1,1,1],[1,0,1],[1,1,1],[1,0,0],[1,0,0]];
    var q = [[0,0,0],[0,1,0],[1,0,1],[0,1,1],[0,0,1],[0,0,1]];
    var r = [[0,0,0],[1,0,0],[1,1,1],[1,0,0],[1,0,0],[1,0,0]];
    var s = [[0,0,0],[0,1,1],[1,0,0],[0,1,0],[0,0,1],[1,1,0]];
    var t = [[0,0,0],[0,1,0],[1,1,1],[0,1,0],[0,1,0],[0,1,0]];
    var u = [[0,0,0],[0,0,0],[1,0,1],[1,0,1],[1,0,1],[1,1,1]];
    var v = [[0,0,0],[0,0,0],[0,0,0],[1,0,1],[1,0,1],[0,1,0]];
    var w = [[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[0,1,0,1,0]];
    var x = [[0,0,0],[0,0,0],[0,0,0],[1,0,1],[0,1,0],[1,0,1]];
    var y = [[0,0,0],[1,0,1],[0,1,1],[0,0,1],[0,1,0],[1,0,0]];
    var z = [[0,0,0],[0,0,0],[1,1,1],[0,0,1],[0,1,0],[1,1,1]];

    var A = [[0,0,0],[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,0,1]];
    var B = [[0,0,0],[1,1,0],[1,0,1],[1,1,0],[1,0,1],[1,1,0]];
    var C = [[0,0,0],[0,1,1],[1,0,0],[1,0,0],[1,0,0],[0,1,1]];
    var D = [[0,0,0],[1,1,0],[1,0,1],[1,0,1],[1,0,1],[1,1,0]];
    var E = [[0,0,0],[1,1,1],[1,0,0],[1,1,0],[1,0,0],[1,1,1]];
    var F = [[0,0,0],[1,1,1],[1,0,0],[1,1,0],[1,0,0],[1,0,0]];
    var G = [[0,0,0,0],[1,1,1,0],[1,0,0,0],[1,0,1,1],[1,0,0,1],[1,1,1,1]];
    var H = [[0,0,0],[1,0,1],[1,0,1],[1,1,1],[1,0,1],[1,0,1]];
    var I = [[0,0,0],[1,1,1],[0,1,0],[0,1,0],[0,1,0],[1,1,1]];
    var J = [[0,0,0],[1,1,1],[0,1,0],[0,1,0],[0,1,0],[1,1,0]];
    var K = [[1,0,1],[1,0,1],[1,1,1],[1,1,0],[1,0,1],[1,0,1]];
    var L = [[0,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,1,1]];
    var M = [[0,0,0,0,0],[1,1,0,1,1],[1,0,1,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]];
    var N = [[1,0,0,1],[1,1,0,1],[1,0,1,1],[1,0,0,1],[1,0,0,1],[1,0,0,1]];
    var O = [[0,0,0],[1,1,1],[1,0,1],[1,0,1],[1,0,1],[1,1,1]];
    var P = [[1,1,1],[1,0,1],[1,1,1],[1,0,0],[1,0,0],[1,0,0]];
    var Q = [[0,0,0,0],[1,1,1,0],[1,0,1,0],[1,0,1,0],[1,0,1,0],[1,1,0,1]];
    var R = [[1,1,1],[1,0,1],[1,1,0],[1,0,1],[1,0,1],[1,0,1]];
    var S = [[1,1,1,0],[1,0,0,0],[0,1,1,0],[0,0,1,0],[0,0,1,0],[1,1,1,0]];
    var T = [[0,0,0],[1,1,1],[0,1,0],[0,1,0],[0,1,0],[0,1,0]];
    var U = [[0,0,0,0],[1,0,1,0],[1,0,1,0],[1,0,1,0],[1,1,1,1],[0,0,0,1]];
    var V = [[0,0,0,0,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]];
    var W = [[0,0,0,0,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[0,1,0,1,0]];
    var X = [[0,0,0,0,0],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1]];
    var Y = [[1,0,1],[1,0,1],[0,1,0],[0,1,0],[0,1,0],[0,1,0]];
    var Z = [[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,1,0],[1,1,0,0],[1,1,1,1]];

    var _1 = [[0,0,0],[0,1,0],[1,1,0],[0,1,0],[0,1,0],[1,1,1]];
    var _2 = [[0,0,0,0],[0,1,1,0],[1,0,0,1],[0,0,1,0],[0,1,0,0],[1,1,1,1]];
    var _3 = [[0,0,0],[1,1,0],[0,0,1],[0,1,0],[0,0,1],[1,1,0]];
    var _4 = [[0,0,0,0],[1,0,1,0],[1,0,1,0],[1,1,1,1],[0,0,1,0],[0,0,1,0]];
    var _5 = [[0,0,0],[1,1,1],[1,0,0],[1,1,0],[0,0,1],[1,1,0]];
    var _6 = [[0,0,0],[0,1,1],[1,0,0],[1,1,0],[1,0,1],[0,1,0]];
    var _7 = [[0,0,0,0],[1,1,1,0],[0,0,1,0],[0,1,1,0],[0,0,1,0],[0,0,1,0]];
    var _8 = [[0,0,0],[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,1,1]];
    var _9 = [[0,0,0],[1,1,1],[1,0,1],[1,1,1],[0,0,1],[0,0,1]];
    var _0 = [[0,1,1,0],[1,0,0,1],[1,0,1,1],[1,1,0,1],[1,0,0,1],[0,1,1,0]];

    var _space = [[0],[0],[0],[0],[0],[0]];
    var _explanation_mark  = [[1],[1],[1],[1],[0],[1]];

    var numbers = ["1","2","3","4","5","6","7","8","9","0"];
    var specials = " !";

    var lower_case_arrays = [ a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z ];
    var upper_case_arrays = [ A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z ];
    var number_arrays = [ _1,_2,_3,_4,_5,_6,_7,_8,_9,_0 ];
    var special_arrays = [ _space, _explanation_mark];

    var start_i = 0;
    var start_j = 0;
    var letter_height = 6;

    /*
            ---- +i
            |
            |
            +j

          Notes
            - all letters are currently 7 tall (6 is ideal but may not look good...)
     */

    this.display_text = function(){
        this.clearDrawingArea();
        var text = document.getElementById("user_text").value;
        var i_index = start_i;
        var j_index = start_j;
        var letter = false;


        for (var i = 0; i <text.length; i++){

            var str_ = text.substring(i,i+1);

            // newline
            if (str_ === "\n"){
                i_index = start_i;
                j_index += letter_height + 1;
                letter = false;
            }

            // Number
            else if (str_ in numbers) {
                number_index  = numbers.indexOf(str_);
                letter = number_arrays[number_index];
                console.log("number: "+str_+": "+str_)
            }

            // Special
            else if (specials.indexOf(str_) >= 0) {
                special_index  = specials.indexOf(str_);
                letter = special_arrays[special_index];
                console.log(letter);
                console.log("special: "+str_+": "+str_)
            }

            // Lower case
            else if (this.lower_case(str_)){
                console.log("string:",str_," is lowercase");

                var lower_index = str_.charCodeAt(0) - 97;
                if (lower_index < lower_case_arrays.length) {
                    letter = lower_case_arrays[lower_index];
                }
            }
            // Upper Case
            else if (this.upper_case(str_)){
                console.log("string:",str_," is upper case");
                var upper_index = str_.charCodeAt(0) - 65;
                if (upper_index < upper_case_arrays.length) {
                    letter = upper_case_arrays[upper_index];
                }
            }

            else{
                letter = false;
                console.log("string:",str_," not handled. length:",str_.length,". str_ in specials:",(specials.indexOf(str_)>=0));
            }


            // Draw letter
            if (letter){

                this.draw_letter(i_index,j_index,letter);
                i_index += letter[0].length+1;

                if (i_index > this.numberDivsPerRow - 4){
                    i_index = start_i;
                    j_index += letter_height + 1;
                }
            }
        }
    };

    this.lower_case = function(letter){
        lowers = "abcdefghijklmnopqrstuvwxyz";
        return letter === letter.toLowerCase() && lowers.indexOf(letter)>=0
    };

    this.upper_case = function(letter){
        uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return letter === letter.toUpperCase() && uppers.indexOf(letter)>=0
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
                    //console.log("letter[j][i] == 1")
                }
                i_matrix += 1
            }
            j_matrix += 1;
            i_matrix = i_idx;
        }
    }




}

