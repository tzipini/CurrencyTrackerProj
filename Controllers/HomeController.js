var express = require('express');
var url = require('url');
var HomeModel = require('../Models/HomeModel');


exports.ShowAllCurrencies = function (req,res)
{   
    HomeModel.ReadAllCurrencies(req, res, function (data) {
        var data = { quetes: data };

        //var p = url.parse(req.url, true);

        if (req.url.includes('graph')) {
            res.render('pages/homeWithGraph', data);
        } else {
            res.render('pages/home', data);
        }

    }
    );


}