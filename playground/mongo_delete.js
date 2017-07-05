const {MongoClient,ObjectId} = require('mongodb');
// var obj=ObjectId();
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
  console.log('Unable to connect with MondoDb Server');
  }
  console.log('Connect with Mongo Db server');

// db.collection('Todos').deleteMany({name:'vijay'}).then((res)=>{
//   console.log(res);
// });
//

// db.collection('Todos').deleteOne({text:'Something to do'}).then((res)=>{
//   console.log(res);
// });

db.collection('Todos').findOneAndDelete({complete:false}).then((res)=>{
  console.log(res);
})
});
