const {ObjectId}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {users1}=require('./../server/models/users');

// var id='595e2545975fcfd1dba';

// if(!ObjectId.isValid(id)){
//   console.log('Id not found');
// }
//
// users1.find({
//   _id:id
// }).then((todos)=>{
//   console.log(todos);
// });
//
// users1.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log(todo);
// });
//
// users1.findById(id).then((todo)=>{
//   console.log(todo);
// });

users1.findById('595e2bb').then((user)=>{
  if(!user){
    return console.log('unable to find data');
  }
  console.log(JSON.stringify(user,undefined,2));
},(e)=>{
  console.log(e);
})
