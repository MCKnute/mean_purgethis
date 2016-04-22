var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function() {
  return {
    showAll: function(req, res) {
      Question.find({}, function(err, results){
      	if(err) {
      		console.log(err);
      	} else {
      		res.json(results);
      	}
      });
    },

    create: function(req, res) {
      Question.create(req.body, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },


  };
})();