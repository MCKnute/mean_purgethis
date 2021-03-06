var mongoose = require("mongoose");
var User = mongoose.model('User');

var errors_array = [];

module.exports = (function() {
	return {
	showAll: function(req, res) {
	    User.find({}, function(err, results){
      	if(err) {
      		console.log(err);
      	} else {
      		res.json(results);
      	}
      });
    },

	showOne: function(req, res){
		User.findOne({_id: req.params.id}, function(err, results){
      	if(err) {
      		console.log(err);
      	} else {
      		res.json(results);
      	}
      });
    },

	create: function(req, res) {
	 	console.log("POST DATA", req.body);
	 	
	 	User.create(req.body, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
      		}
	    });
    },

     logIn: function(req, res){
    	console.log("Logging in....", req.body);
    	User.findOne({name: req.body.name}, function(err, user){
    	  if(err){ 
    	    console.log(err);
    	  } else if(user){
    	      res.json(user);
    	  } else {
    	      User.create({name: req.body.name}, function(err, results){
    	        if(err) { console.log(err); }
    	        res.json(results);
    	      });
    	  }
    	});
    },

  };
})();