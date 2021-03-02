const mongoose = require('mongoose');
const Expense=new mongoose.Schema({
    
    note:String,
    money:Number,
    type:String,
    });

module.exports=mongoose.model('Expense',Expense);