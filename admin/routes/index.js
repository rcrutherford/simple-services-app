var express = require('express');
var router = express.Router();
var request = require('request');


var myURL = "http://localhost:1337/localhost:8080/employees";
/* GET home page. */
router.get('/', function(req, res, next) {
	request({ url: myURL, method: "GET"}, function (error, response, body) {
		if (!error && response.statusCode == 200) {
	    	//console.log(body) // Print the google web page.
	    	var jsonbody = JSON.parse(body);
    	
	    	res.render('index',{ title: "Admin - Employees", results: jsonbody });
		}
		//res.end();
	})
	// this is how we render the html
 	//res.render('index', { title: 'Admin - Express' });
});

module.exports = router;

