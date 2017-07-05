const {MongoClient,ObjectId} = require('mongodb');
// var obj=ObjectId();
MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
  if(err){
  console.log('Unable to connect with MondoDb Server');
  }
  console.log('Connect with Mongo Db server');

db.collection('Data').findOneAndUpdate({
  _id:new ObjectId('595bb0365188186bc07d7c76')
},{
  $inc:{
    age:1
  },
  $set:{
    name:'santosh'
  }
},{
  returnOriginal:false
}).then((res)=>{
  console.log(res);
});
});
