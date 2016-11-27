//'use strict';

$(document).ready(function() {

  window.addEventListener("resize", function() {
    console.log("resize!");
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
  });

  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  xOffset = Number($('#page-content-wrapper').css('padding-left').replace(/\D/g, '')) * 2;

  setupCanvas(screen_width - xOffset, screen_height - 70);
});

function setupCanvas(screen_width, screen_height) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.canvas.width = screen_width;
  ctx.canvas.height = screen_height;
  runtime(screen_width, screen_height);
}

// ------------------- // Sliders // ------------------- //

var sliderIds = ["pathTimeDelay", "timeSmallCircleDelay", "radius", "largeRadius", "xToCirclePathConstant", "yTocirclePathConstant", "xFromCirclePathConstant", "yFromcirclePathConstant"];

for (var i = 0; i < sliderIds.length; i++) {
  noUiSlider.create(document.getElementById(sliderIds[i]), {
    start: [50],
    connect: false,
    range: {
      'min': 0,
      'max': 100
    }
  });
}
