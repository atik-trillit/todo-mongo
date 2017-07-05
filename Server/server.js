var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {todo}=require('./models/todo');
var {User}=require('./models/user');
var {otherTodo}=require('./models/otherTodo');

var app=express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var Todo1=new todo({
    text:req.body.text
  });

  var newone=new otherTodo({
    text:req.body.text
  });

  Todo1.save().then((doc)=>{
    res.send(doc);
    console.log(doc);
  },(e)=>{
    console.log(e);
  });

  newone.save().then((doc)=>{
    res.send(doc);
    console.log(doc);
  },(e)=>{
    console.log(e);
  })
});

app.listen(3000,()=>{
  console.log('Server Started at port 3000');
});






// var otherTodo=new todo({
//   text:'afklajfkjak'
//
// });
//
// otherTodo.save().then((res)=>{
//   console.log('data added',res);
// });
