var mongoose=require('mongoose');

var otherTodo=mongoose.model('otherTodo',{
  text:{
    type:String,
    required:true
  }
});

var todotext=new otherTodo({
  text:'This is another todo text here!'
});

todotext.save().then((doc)=>{
  console.log(doc);
});

module.exports={otherTodo};
