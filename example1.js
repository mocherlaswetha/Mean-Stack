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
const data = new nm
({name:'SWETHA',age:20,phno:1234567890});
const data1 = new nm
({name:'SWE',age:20,phno:1234567000});
data.save();
data1.save();
nm.insertMany([
   { name: 'loki' , age:19 ,phno:1205474452},
   { name: 'renu' , age:21 ,phno:1215474452},
   { name: 'john' , age:20 ,phno:1225474452},
]).then(function(){
   console.log("data inserted")
}).catch(function(error){
   console.log(error)
});
nm.findOne({},function(err,data){
 if(err){
console.log(err);
}
else{
console.log("Frist function call:",data);
}
});
nm.deleteOne({name:'SWE'}).then(function(){
console.log("Data deleted")
}).catch(function(error){
console.log(error)
});
