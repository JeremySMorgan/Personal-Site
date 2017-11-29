var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/portfolio', function(request, response) {
  response.render('pages/portfolio');
});

// Portfolio pages
app.get('/portfolio/robosimian', function(request, response) {
  response.render('pages/robosimian');
});
app.get('/portfolio/quadrotor_controls', function(request, response) {
  response.render('pages/quadrotor_controls');
});
app.get('/portfolio/prm', function(request, response) {
  response.render('pages/prm');
});
app.get('/portfolio/_2d_graph_search', function(request, response) {
  response.render('pages/_2d_graph_search');
});
app.get('/portfolio/quadbot', function(request, response) {
  response.render('pages/quadbot');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


