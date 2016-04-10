'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  Title: {
  	type:String
  },

  Author:{
  	type:String
  },

  Cover_Image: {
  	data: Buffer, contentType: String
  },

  Language: {
  	type:String
  },

  Rating:{
  	type:Number
  } ,

  Owner:{
	type:String
  },

  Genre: String
  });

var Book = module.exports = mongoose.model('Book', BookSchema);

module.exports.getAllBooks = function(callback){
	Book.distinct(Title,callback);
}

module.exports.getBookbyTitle=function(title,callback){
	var query = {Title:title}
	Book.find(query,callback);
}

module.exports.getBookbyAuthor=function(author,callback){
	var query = {Author:author}
	Book.find(query,callback);
}

module.exports.getBookbyUser=function(user,callback){
	var query = {Owner:user.id}
	Book.find(query,callback);
}
