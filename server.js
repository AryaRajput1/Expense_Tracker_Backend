const mongoose = require('mongoose');
const express = require('express');
const Expense = require('./ExpenseSchema');
const app=express();
const port = process.env.PORT||3001

app.use(express.json());
//database
const dbUrl='mongodb://localhost:27017'
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true});

app.get('/',(req,res)=>{
    res.send('working');
})
app.get('/data',(req,res)=>{
    Expense.find((err,data)=>{
res.send(data);
    })
})
app.delete('/data/delOne/:id',(req,res)=>{
    const id=req.params.id;
    Expense.deleteOne({"_id":id})
    .then(resp=>res.send('success'));
})
app.delete('/data/delMany',(req,res)=>{
    const id=req.params.id;
    Expense.deleteMany({})
    .then(resp=>res.send('success'));
})
app.post('/data',(req,res)=>{
    new Expense(req.body).save((err)=>{
        res.send('success');
    });
})
app.listen(port,()=>{
    console.log('server running');
})