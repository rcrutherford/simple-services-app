var express = require('express');
var router = express.Router();
var request = require('request');


/* delete employee. */
router.get('/:id', function(req, res, next) {
    var dbid = req.params.id;
    console.log(dbid)
    var myURL = `http://localhost:1337/localhost:8080/employees/${dbid}`;
    // request.delete(myURL, 
    request({ url: myURL, method: "DELETE"}, function(error, response, body) {
            console.log("statusCode: " + response.statusCode)
            if (!error && response.statusCode == 200) {
            	console.log("delete:")
                console.log(body)
                var jsonbody = JSON.parse(body);
            }
            res.redirect("http://localhost:3333");
        })
        // this is how we render the html
        //res.render('index', { title: 'Admin - Express' });
    });

module.exports = router;