// https://scotch.io/tutorials/use-ejs-to-template-your-node-application

var express = require('express');
var HomeController = require('./Controllers/HomeController');
var app = express();

// view engine setup

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));
 

app.use('/examine', function (req, res) {
    res.render('pages/examine');
});

app.use('/newCurrency', function (req, res) {
    res.render('pages/stam', { query: req.query });
});

app.use('/', HomeController.ShowAllCurrencies);


//app.use('/transform', function (req, res) {
//    res.render('pages/transform');
//});


//app.use('/', function (req, res) {
//    HomeController.ShowAllCurrencies(req, res);
//   // res.render('pages/home');
//});    

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
