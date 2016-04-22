// require mongoose
var mongoose = require('mongoose');
// create the schema
var UserSchema = new mongoose.Schema({
	_user: String, 
	question: String, 
	description: String
});
// register the schema as a model
var Question = mongoose.model('Question', QuestionSchema);