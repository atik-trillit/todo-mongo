var mongoose=require('mongoose');

var users1=mongoose.model('users1',{
  text:{
    type:String,
      // minlength:1

  },
  age:{
    type:Number,


  },
  completed:{
    type:Boolean,
  // default:false

  }
});




module.exports={users1};
