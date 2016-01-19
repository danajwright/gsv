var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


var sendgrid = require('sendgrid')(SENDGRID_API_KEY);

app.post('/email', function(req, resp) {
  sendgrid.send({
    to: 'danajwright@gmail.com'
    from: 'website-quote'
    subject: 'Quote request from '+req.body.name,
    text: 	req.body.name
    		req.body.email
			req.body.message
    resp.send("email sent");
  },
//   function(err, json) {
//     if (err) { return console.error(err); }
//     console.log(json);
//   });
//   console.log("in email post");
//   
// });


app.use(express.static(__dirname + "/public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

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

