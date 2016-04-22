var mongoose = require("mongoose");
var Question = mongoose.model('Question');

var errors_array = [];

module.exports = {
	showAll: function(req, res) {
	    Question.find({}, function(err, questions_array){
	    	res.render('index', {questions: questions_array});
	    });
	},
	showOne: function(req, res){
		Question.findOne({_id: req.params.id}, function (err, question_info){
			if(err) {
		     console.log(errors_array);
		 } else {
		     res.render('show', {question: question_info});
		 });
	},
	new: function(req, res) {
		res.render("new");
	},
	create: function(req, res) {
	 	console.log("POST DATA", req.body);
	 	
	 	var question = new Question({_user: req.body.user, question: req.body.question, description: req.body.description});

	 	question.save(function(err){
	 		if(err) {
	 			console.log('Something went wrong!');
	 			res.redirect('/question/new');
	 		} else {
	 			console.log('Successfully added a question!');
			    res.redirect('/');
			}
		});
	}
}