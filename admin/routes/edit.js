var express = require('express');
var router = express.Router();
var request = require('request');



/* GET edit page. */
router.get('/:id', function(req, res, next) {
	var dbid = req.params.id;
	var myURL = `http://localhost:1337/localhost:8080/employees/${dbid}`;
	request(myURL, function (error, response, body) {
		console.log("statusCode: "+response.statusCode)
		if (!error && response.statusCode == 200) {
	    	console.log(body) 
	    	var jsonbody = JSON.parse(body);
    	
	    	res.render('edit',{ title: "Employee Edit View", results: jsonbody });
		}
		//res.end();
	})
	// this is how we render the html
 	//res.render('index', { title: 'Admin - Express' });
});

module.exports = router;

