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


function drawBox(drawingboxWidth, drawingBoxHeight, widthOfDiv, heightOfDiv,divClassName,containerIdName){

    // Create new instance of drawing engine
    var DE = new DrawingEngine(drawingboxWidth, drawingBoxHeight, widthOfDiv, heightOfDiv,divClassName,containerIdName);

    // Use the instance to create matrix
    DE.runTime();

}



// The DrawingEngine object creates a box of given dimensions

function DrawingEngine(drawingboxWidth, drawingBoxHeight, widthOfDiv, heightOfDiv,divClassName, containerIdName){

    // Width and Height of container
    this.drawingboxWidth = drawingboxWidth;
    this.drawingBoxHeight = drawingBoxHeight;

    // Width and Height of individual Divs
    this.divWidth = widthOfDiv;
    this.divHeight = heightOfDiv;

    // Number of rows and columns
    this.numRows = this.drawingboxWidth / this.divWidth;
    this.numCols = this.drawingBoxHeight / this.divHeight;

    // Names of divs and container
    this.divClassName = divClassName;
    this.containerIdName = containerIdName;


    // Div Creation function
    this.runTime =  function() {

        for (i = 0; i < this.numRows; i++) {

            for (j = 0; j < this.numCols; j++) {

                var div = document.createElement('div');

                // Label each div with a classname and id
                div.className = this.divClassName;
                div.id = i+":"+j;

                // Set the position attribute as 'absolute'
                div.style.position = "absolute";

                // Off set each div
                div.style.left = returnValidPixelFormat(i,"LEFTRIGHT",this.divHeight,this.divWidth);
                div.style.top = returnValidPixelFormat(j,"UPDOWN",this.divHeight,this.divWidth);

                // Set the size of each div
                div.style.width = this.divWidth+"px";
                div.style.height = this.divHeight+"px";

                // Append the newly created div :)
                document.getElementById(this.containerIdName).appendChild(div);


            }
        }

    };

    // Returns  i/j incrementer multiplied accordingly and converts to a valid string format for browser to understand
    function returnValidPixelFormat(i,upDown_leftRight,divHeight,divWidth){
        if (upDown_leftRight.toUpperCase() === "UPDOWN"){
            return (i * divHeight).toString() + "px";
        }
        else{
            return (i * divWidth).toString() + "px";
        }


    }
}

