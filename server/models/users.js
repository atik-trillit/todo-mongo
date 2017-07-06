var mongoose=require('mongoose');

var users1=mongoose.model('users1',{
  text:{
    type:String,
      minlength:1

  },
  age:{
    type:Number,
  

  },
  completed:{
    type:Boolean,
  default:false

  }
});

// var name=new users1({
//   text:'Santosh',
//   age:22
//
// });
//
// name.save().then((res)=>{
//   console.log(res);
// },(err)=>{
//   console.log(err);
// });


module.exports={users1};
