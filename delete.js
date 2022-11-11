const express = require('express');
const app=express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_C",(err)=>{
if(err)
console.log("DB Not Connected-Error");
else
console.log("Db Connected");
});
const ns=new mongoose.Schema({
name:String,
age:Number,
phno:Number
});
const nm=new mongoose.model("records",ns);
nm.deleteOne({name:'SWE'}).then(function(){
console.log("Data deleted")
}).catch(function(error){
console.log(error)
});