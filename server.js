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

app.post('/email', function(req, resp) {
	sendgrid.send({
	  to: 'danajwright@gmail.com',
	  from: 'website-quote',
	  subject: 'Quote request from '+req.body.fullName,
	  html: '<b>full name:</b> ' + req.body.fullName +
	  		'<br><br><b>phone:</b> ' + req.body.phone +
	  		'<br><br><b>email:</b> ' + req.body.email +
	  		'<br><br><b>pickup zip:</b> ' + req.body.pickupZip +
	  		'<br><br><b>pickup date:</b> ' + req.body.pickupDate +
	  		'<br><br><b>delivery zip:</b> ' + req.body.deliverZip +
	  		'<br><br><b>delivery date:</b> ' + req.body.deliverDate +
	  		'<br><br><b>cargo value:</b> ' + req.body.cargoValue +
	  		'<br><br><b>cargo weight:</b> ' + req.body.cargoWeight
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

