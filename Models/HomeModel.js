var Client = require('node-rest-client').Client;
var express = require('express');

var client = new Client();


exports.ReadAllCurrencies = function (req,res,next)
{
    client.get("http://apilayer.net/api/live?access_key=4d0a6de59cafda40da9d4b7aea38efd6  ", function (data, response) {
        // parsed response body as js object
        
        next(data.quotes);       
    });

 
}