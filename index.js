var express = require('express');
var app = express();

var request = require('request');
const https = require('https');
var querystring = require('querystring');
var http = require('http');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: false
}));
app.use(bodyParser.json()); // to support JSON-encoded bodies


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/js_art', function(request, response) {
    response.render('pages/js_art');
});

app.get('/led_interface', function(request, response) {
  response.render('pages/led_interface');
});

// app.post('/send_post',function(request, response){

//   console.log("/send_post called");

//     var data = querystring.stringify(request.body);
//     var options = {
//         host: 'led_interface.ngrok.io',
//         path: "/LED",
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Content-Length': Buffer.byteLength(data)
//         }
//     };
//     var req = http.request(options, function(res) {
//         res.setEncoding('utf8');
//         res.on('data', function (chunk) {
//             console.log("rpi response: " + chunk+"\n");
//         });
//     });
//     req.write(data);
//     req.end();

//     response.send("OK");
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


