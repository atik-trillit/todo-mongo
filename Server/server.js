var express = require('express');
var bodyParser=require('body-parser');
var {ObjectId}=require('mongodb');

var {mongoose}=require('./db/mongoose');
var {users1}=require('./models/users');
var {Todo_model}=require('./models/todo');

var app=express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  // console.log(req.body);
  var userData=new users1({
    text:req.body.text,
    age:req.body.Number
  });

  userData.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
  res.status(400).send(err);
});
});

app.get('/todos',(req,res)=>{
  users1.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;

if(!ObjectId.isValid(id)){
  return res.status(404).send()
}

users1.findById(id).then((todo)=>{
  if(!todo){
    res.status(404).send();
  }
  res.send({todo});
})

});
app.listen(3000,()=>{
  console.log(`Started port 3000`);
});



module.exports={app};
