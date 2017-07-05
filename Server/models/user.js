var mongoose=require('mongoose');

var User=mongoose.model('User',{
  text:{
    type:String,
    minlength:1
  },
  email:{
    type:String,
    minlength:1,
    trim:true
  }
});

var userDetails=new User({
  text:'trillit',
  email:'trillit@gmail.com'
});

userDetails.save().then((res)=>{
  console.log('Save details',res);
});

module.exports={User};
