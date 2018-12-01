$(document).ready(function() {

    function start(){running = true;}
    function stop(){running = false;}
    function toDegrees (angle) {return angle * (180 / Math.PI);}
    function rgb(r,g,b){return "rgb("+r+","+g+","+b+")"}
    function rangeOutput(n,min,max){return (((n) * (max - min)) / (100)) + min;}
    function xcircle(time,rad){return  rad*Math.cos(toDegrees(time));}
    function ycircle(time,rad){return rad*Math.sin(toDegrees(time));}
    function xPath(time,rad){return rad*Math.cos(toDegrees(time))}
    function yPath(time,rad){return rad*Math.sin(toDegrees(time))}

    function runtime(screen_width,screen_height){
        xInitVal = screen_width/2;
        yInitVal = screen_height/2;
        $(document).ready(function(){
            setInterval(mainGraphics,fps);
        });
    }

    function setupCanvas(screen_width,screen_height){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.canvas.width  = screen_width;
        ctx.canvas.height = screen_height;
        runtime(screen_width,screen_height);
    }

    function checkInput(){
        pathTimeDelay = rangeOutput(pathTimeDelayInput.noUiSlider.get(), 0, .0015);
        timeSmallCircleDelay = rangeOutput(timeSmallCircleDelayInput.noUiSlider.get(),-.0002,.0004);
        radius = rangeOutput(radiusInput.noUiSlider.get(), 0,400);
        largeRadius=rangeOutput(largeRadiusInput.noUiSlider.get(),0,150);
        if (rChangeInput.checked === true){rChange = false;}
        if (rChangeInput.checked === false){rChange = true;}
        if (gChangeInput.checked === true){gChange = false;}
        if (gChangeInput.checked === false){gChange = true;}
        if (bChangeInput.checked === true){bChange = false;}
        if (bChangeInput.checked === false){bChange = true;}
        xToCirclePathConstant = rangeOutput(xToCirclePathConstantInput.noUiSlider.get(),-2,4);
        yToCirclePathConstant = rangeOutput(yToCirclePathConstantInput.noUiSlider.get(), -2,4);
        yFromCirclePathConstant = rangeOutput(yFromCirclePathConstantInput.noUiSlider.get(), -2,4);
        xFromCirclePathConstant = rangeOutput(xFromCirclePathConstantInput.noUiSlider.get(), -2,4);
    }

    function mainGraphics(){
        if (initStart){
            if (running){
                colorChange();
                checkInput();
            }
            initStart = false;
        }
        if (running===true){
            var xMoveTo = xcircle(time,radius)	+ xInitVal  + (xToCirclePathConstant) * xPath(pathTime,largeRadius);
            var yMoveTo = ycircle(time,radius) + yInitVal +  (yToCirclePathConstant) * yPath(pathTime,largeRadius);
            var xLineTo =  xInitVal + 	(xFromCirclePathConstant) * xPath(pathTime,largeRadius);
            var yLineTo =   yInitVal	+	(yFromCirclePathConstant) * yPath(pathTime,largeRadius);
            ctx.beginPath();
            ctx.moveTo( xMoveTo,yMoveTo );
            ctx.lineTo( xLineTo , yLineTo );
            ctx.strokeStyle=rgb(r,g,b);
            ctx.stroke();
            time+=timeSmallCircleDelay;
            pathTime+=pathTimeDelay;
            colorChange();
            checkInput();
        }
    }

    function colorChange(){
        if (rChange === true){
            if (r ===10){rUp=true;}
            if (r === 250){rUp=false;}
            if (rUp){r++;}
            if (!rUp){r--;}
        }
        if (gChange){
            if (g ===10){gUp=true;}
            if (g === 250){gUp=false;}
            if (gUp){g++;}
            if (!gUp){g --;}
        }
        if (bChange){
            if (b ===10){bUp=true;}
            if (b === 250){bUp=false;}
            if (bUp){b+=2;}
            if (!bUp){b --;}
        }
    }

    xOffset = Number( $('#page-content-wrapper').css('padding-left').replace(/\D/g,'') )* 20;

    window.addEventListener("resize", function(){
        console.log("resize!");
        screen_width = window.innerWidth;
        screen_height = window.innerHeight;
    });

    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    xOffset = Number($('#page-content-wrapper').css('padding-left').replace(/\D/g,'')) * 2 ;

    // create sliders
    var sliderIds = ["pathTimeDelay","timeSmallCircleDelay","radius","largeRadius","xToCirclePathConstant","yTocirclePathConstant","xFromCirclePathConstant","yFromcirclePathConstant"];
    for (var i =0; i<sliderIds.length; i++){
        noUiSlider.create(document.getElementById(sliderIds[i]), {
            start: [50],
            connect: false,
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    setupCanvas( screen_width - xOffset, screen_height-70 );

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var canvasHeight= window.innerHeight;
    var canvasWidth=window.innerWidth;

    var fps = 20;
    var running = true;
    var offset = 300;
    var xInitVal = canvasWidth/2 ;
    var yInitVal = canvasHeight/2 - $("#menu-toggle").height() -100;
    var r=0, rUp =true;
    var g=150,gUp=true;
    var b=200, bUp =true;
    var pathTime = 0, time = 0;
    var initStart =true;
    var pathTimeDelay = .0001;
    var timeSmallCircleDelay = .005;
    var radius = 150, largeRadius=300;
    var rChange = true, gChange = true, bChange = true;
    var xToCirclePathConstant = 1;
    var yToCirclePathConstant = 1;
    var xFromCirclePathConstant = 1;
    var yFromCirclePathConstant = 1;

    var pathTimeDelayInput = document.getElementById("pathTimeDelay");
    var timeSmallCircleDelayInput = document.getElementById("timeSmallCircleDelay");
    var radiusInput = document.getElementById("radius");
    var largeRadiusInput = document.getElementById("largeRadius");
    var rChangeInput = document.getElementById("rChange");
    var gChangeInput = document.getElementById("gChange");
    var bChangeInput = document.getElementById("bChange");
    var xToCirclePathConstantInput = document.getElementById("xToCirclePathConstant");
    var yToCirclePathConstantInput = document.getElementById("yTocirclePathConstant");
    var xFromCirclePathConstantInput = document.getElementById("xFromCirclePathConstant");
    var yFromCirclePathConstantInput= document.getElementById("yFromcirclePathConstant");

    document.getElementById("start").addEventListener("click",start);
    document.getElementById("stop").addEventListener("click",stop);

    var slider = document.getElementById("slider");
    var sliderOutput = document.getElementById("rangeOutput");

});
