var express = require('express');
var router = express.Router();
var Book = require('../models/book');

router.get('/addBook', function(req, res){
  if(req.isAuthenticated()){
    res.render('addBook');
  } else {
    //req.flash('error_msg','You are not logged in');
    res.redirect('/users/login');
  }
});

router.post('/addBook', function(req, res){
  if(!req.isAuthenticated()){
    res.redirect('/users/login');
    return;
  }
	var title = req.body.title;
	var author = req.body.author;
  var Owner = req.user.id;

	// Validation
	req.checkBody('title', 'Name is required').notEmpty();
	req.checkBody('author', 'Email is required').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		res.render('/addBook',{
			errors:errors
		});
	} else {
		var newBook = new Book({
			Title: title,
			Author: author,
      Owner: Owner
		});

		newBook.save(function(){
			res.render('index');
		});
	}
});

module.exports = router;
