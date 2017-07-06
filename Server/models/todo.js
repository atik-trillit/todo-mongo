var mongoose=require('mongoose');
var Todo_model=mongoose.model('Todo_model',{
  email:{
    type:String,
      minlength:1

  },age:{
    type:Number,
    required:true

  },completedAt:{
    type:Boolean,
  // default:false

  }
});

module.exports={Todo_model};

// var name=new Todo_model({
//   text:'Shamim',
//   age:26
//
// });
//
// name.save().then((res)=>{
//   console.log(res);
// },(err)=>{
//   console.log(err);
// });
