const mongoose = require('mongoose');
const Expense=new mongoose.Schema({
    
    note:String,
    money:Number,
    incomeType:String,
    });

module.exports=mongoose.model('Expense',Expense);