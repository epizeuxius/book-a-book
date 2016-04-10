'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RequestSchema = new Schema({
  BookTitle:{
  	type: String
  }
  
  Book_id:{
  	type: String
  },
  
  Type: {
  	type:String // Rent / Borrow / Buy
  },
  
  BorrowerUserName:{
  	type: String
  },
  
  LenderUserName:{
  	type:String
  },
 
  Progress: String // can have 3 states sent/accepted/confirmed

});

var Request = module.exports = mongoose.model('Request', RequestSchema);
