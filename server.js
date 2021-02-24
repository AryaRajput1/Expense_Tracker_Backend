const mongoose = require('mongoose');
const express = require('express');
const Expense = require('./ExpenseSchema');
const app=express();
const port = process.env.PORT||3001


//database
const dbUrl=''
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true});

app.get('/',(req,res)=>{
    res.send('working');
})
app.get('/data',(req,res)=>{
    Expense.find((data)=>{
res.status(200).send(data);
    })
})
app.post('/data',(req,res)=>{
    new Expense(req.body).save();
})
app.listen(port,()=>{
    console.log('server running');
})