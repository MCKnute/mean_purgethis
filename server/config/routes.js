var mongoose = require("mongoose");
var Question = mongoose.model('Question');
var User = mongoose.model('User');

var questions = require('../controllers/questions.js');
var users = require('../controllers/users.js');

module.exports = function(app) {

	//////// Routes!
	// Root route

	var errors_array = [];

	app.get('/', function(req, res) {
		customers.showAll(req, res);
	});
	app.get('/customers', function(req, res) {
		customers.showAll(req, res);
	});
	app.get('/orders', function(req, res) {
		orders.showAll(req, res);
	});


	// New
	app.get('/questions/new', function(req, res) {
		questions.new(req, res);
	});
	app.get('/users/new', function(req, res) {
		users.new(req, res);
	});


	// Show
	app.get('/questions/:id', function(req, res) {
	   questions.showOne(req, res);
	});


	/// Create
	app.post('/questions', function(req, res) {
	 	questions.create(req, res);
	});
	app.post('/users', function(req, res) {
	 	users.create(req, res);
	});


};