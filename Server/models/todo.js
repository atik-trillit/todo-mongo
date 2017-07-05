var mongoose=require('mongoose');

var todo=mongoose.model('todo',{
  text:{
    type:String,
    required:true,
    minlenght:1,
    trim:true

  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

var newTodo=new todo({
text:'this is todo models'

});

newTodo.save().then((res)=>{
  console.log('Data saved successfully',res)
},(err)=>{
  console.log('Failed to save',err);
});

module.exports={todo};
