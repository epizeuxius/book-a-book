var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var Book = require('../models/book');

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

router.get('/me',ensureAuthenticated, function(req, res){
	Book.getBookbyUser(req.user, function(err, books){
		res.status(200).json(books);
	})
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

router.get('/book',ensureAuthenticated, function(req, res){
	res.redirect('/books/addBook');
});

module.exports = router;
