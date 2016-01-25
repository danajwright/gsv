var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//check if the server is on Heroku, if not, we're on local - include credentials file
if (process.env.SENDGRID_API_KEY === undefined) {
  var credentials = require('./credentials');
  var SENDGRID_API_KEY = credentials.sendgrid.api_key;
}
else { //if on Heroku, set environment variable to the heroku environment variable
  var SENDGRID_API_KEY  =  process.env.SENDGRID_API_KEY;
}

var sendgrid = require('sendgrid')(SENDGRID_API_KEY);

//post from quote modal
app.post('/quote-email', function(req, resp) {
	sendgrid.send({
	  to: 'danajwright@gmail.com',
	  from: 'website-quote',
	  subject: 'Quote request from '+req.body.fullName,
	  html: '<b>Full name:</b> ' + req.body.fullName +
	  		'<br><br><b>Phone:</b> ' + req.body.phone +
	  		'<br><br><b>Email:</b> ' + req.body.email +
	  		'<br><br><b>Pickup ZIP:</b> ' + req.body.pickupZip +
	  		'<br><br><b>Pickup date:</b> ' + req.body.pickupDate +
	  		'<br><br><b>Delivery ZIP:</b> ' + req.body.deliverZip +
	  		'<br><br><b>Delivery date:</b> ' + req.body.deliverDate +
	  		'<br><br><b>Cargo Dimentions:</b> ' + req.body.cargoDims +
	  		'<br><br><b>Cargo weight:</b> ' + req.body.cargoWeight
	  },

    function(err, json) {
      if (err) { return console.error(err); }
    console.log(json);
    });

    console.log("in email post");

    resp.write(JSON.stringify({blah:"blah response"}));
    resp.end();
});

// post from track modal
app.post('/track-email', function(req, resp) {
	sendgrid.send({
	  to: 'danajwright@gmail.com',
	  from: 'website-track',
	  subject: 'Track request from '+req.body.trackName,
	  html: '<b>Full name:</b> ' + req.body.trackName +
	  		'<br><br><b>Phone:</b> ' + req.body.trackPhone +
	  		'<br><br><b>Email:</b> ' + req.body.trackEmail +
	  		'<br><br><b>Issue:</b> ' + req.body.trackIssue
	  },

    function(err, json) {
      if (err) { return console.error(err); }
    console.log(json);
    });

    console.log("in email post");

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

