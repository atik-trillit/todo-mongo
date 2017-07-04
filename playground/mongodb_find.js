const {MongoClient,ObjectId} = require('mongodb');
// var obj=ObjectId();
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
  console.log('Unable to connect with MondoDb Server');
  }
  console.log('Connect with Mongo Db server');

  db.collection('Todos').find({
    _id:new ObjectId('595b6b5d1061fa061814d32c')
  }).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch data');
  });


db.collection('Todos').find().count().then((count)=>{
  console.log(count);
},(err)=>{
  console.log('error');
});

});
