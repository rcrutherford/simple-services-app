var express = require('express');
var router = express.Router();
var request = require('request');



/* save edit page. */
router.get('/:id', function(req, res, next) {
	var dbid = req.params.id;
	var firstname = req.query.firstname
	var lastname = req.query.lastname
	var objToSend = { 
        "firstname": firstname, 
        "lastname": lastname
    };
	var myURL = `http://localhost:1337/localhost:8080/employees/${dbid}`;
	request({ url: myURL, method: "PUT", json: objToSend }, function (error, response, body) {
	// request.put(myURL, objToSend, function (error, response, body) {
		console.log("statusCode: "+response.statusCode)
		if (!error && response.statusCode == 200) {
	    	console.log(body) 
		}
		res.redirect("http://localhost:3333");
	})
	// this is how we render the html
 	//res.render('index', { title: 'Admin - Express' });
});

module.exports = router;

