'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  
   BookTitle:{
  	type: String
  }
  
  Book_id:{
  	type: String
  },
  
  Type: {
  	type:String // Rent / Borrow / Buy
  },
  
  StartDate: {
  	type:Date
  },
  
  Duration: {
  	type:Number,
 },
  
  isFinished: Boolean
  
});

var Transaction=module.exports = mongoose.model('Transaction', TransactionSchema);
