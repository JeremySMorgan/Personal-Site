'use strict';

var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
var isChrome = !!window.chrome && !isOpera; // Chrome 1+
var isIE = false || !!document.documentMode; // At least IE6


function changeImg() {
  var delay = 30;
  setTimeout(function() {
    document.getElementById("intro").style.visibility = "hidden";
  }, delay);
  var background_image = document.getElementById("bg");
  background_image.src = './images/sf_pixels.jpg';
}

// func. 'revertImg()' REVERTS BACKGROUND IMAGE NORMAL
function revertImg() {
  var background_image = document.getElementById("bg");
  background_image.src = './images/sf.jpg';
}

var num = 1;

function greetingOn() {
  if (num === 11) {
    num = 1;
  }
  if (!isFirefox) {
    var greeting = document.getElementById("welcome");
    var file_name = 'url(./images/random_pixels' + num + '.jpeg)';

    greeting.style.background = file_name;
    greeting.style["-webkit-background-clip"] = 'text';
    greeting.style["-webkit-text-fill-color"] = 'transparent';
  }

  num = num + 1;
}

// func. 'revertColorBar()' MAKES GREETING NORMAL
function greetingOff() {

  var b_img = document.getElementById("p1");
  b_img.style.backgroundImage = 'url("./images/transparent.png")';

  var greeting = document.getElementById("welcome");
  greeting.style.backgroundImage = 'url("./images/transparent.png")';
  if (!isFirefox) {
    greeting.style.backgroundColor = "white";
  }
}
