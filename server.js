var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

var SENDGRID_API_KEY = ""

var sendgrid = require('sendgrid')(SENDGRID_API_KEY);

app.post('/email', function(req, resp) {
	sendgrid.send({
	  to: 'danajwright@gmail.com',
	  from: 'website-quote',
	  subject: 'Quote request from '+req.body.name,
	  html: '<b>full name:</b> ' + req.body.fullName +
	  		'<br><br><b>phone:</b> ' + req.body.phone +
	  		'<br><br><b>email:</b> ' + req.body.email +
	  		'<br><br><b>pickup zip:</b> ' + req.body.pickupZip +
	  		'<br><br><b>pickup date:</b> ' + req.body.pickupDate +
	  		'<br><br><b>deliver zip:</b> ' + req.body.deliverZip +
	  		'<br><br><b>deliver date:</b> ' + req.body.deliverDate +
	  		'<br><br><b>cargo value:</b> ' + req.body.cargoValue +
	  		'<br><br><b>cargo weight:</b> ' + req.body.cargoWeight
	});

  console.log(req.body.test)
  console.log(req.body.phone)

  resp.write(JSON.stringify({blah:"blah response"}));
  resp.end();
});


app.use(express.static(__dirname + "/public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view fie

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// work page
app.get('/work', function(req, res) {
    res.render('pages/work');
});

// equip page
app.get('/equip', function(req, res) {
    res.render('pages/equip');
});

// careers page
app.get('/careers', function(req, res) {
    res.render('pages/careers');
});

// contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.listen(port);
console.log('Server listening on ' + port);

