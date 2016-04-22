var mongoose = require("mongoose");
var User = mongoose.model('User');

var errors_array = [];

module.exports = {
	showAll: function(req, res) {
	    User.find({}, function(err, users_array){
	    	res.render('index', {users: users_array});
	    });
	},
	showOne: function(req, res){
		User.findOne({_id: req.params.id}, function (err, user_info){
			if(err) {
		     console.log(errors_array);
		 } else {
		     res.render('show', {user: user_info});
		 });
	},
	new: function(req, res) {
		res.render("new");
	},
	create: function(req, res) {
	 	console.log("POST DATA", req.body);
	 	
	 	var user = new User({name: req.body.name});

	 	user.save(function(err){
	 		if(err) {
	 			console.log('Something went wrong!');
	 			res.redirect('/user/new');
	 		} else {
	 			console.log('Successfully added a user!');
			    res.redirect('/');
			}
		});
	}
}