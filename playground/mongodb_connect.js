// const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectId} =require('mongodb');

var obj=ObjectId();
console.log(obj);

var user={name:'Atik',age:21};
var {name}=user;


// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
//   if(err){
//     console.log('Unable to connect MongoDB Server');
//   }
//   console.log('Connected to MongoDb Server');
// db.collection('Todos').insertOne({
//   // _id:72
//   text:'Something to do',
//   complete:false
// },(err,result)=>{
//   if(err){
//     return console.log('Unable to instert data',err);
//   }
//
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
//
// });
// //
// // db.collection('MyDB').insertOne({
// //   text:'Some text here',
// //   status: false
// // },(err,result)=>{
// //   if(err){
// //     console.log('Unable to create document',err);
// //   }
// //   console.log(JSON.stringify(result.ops,undefined,5));
// // });
//
//
//
//   db.close();
// });
