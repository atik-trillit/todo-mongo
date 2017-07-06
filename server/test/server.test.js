const expect=require('expect');
const request=require('supertest');
const {ObjectId}=require('mongodb');

const {app}=require('./../server');
// const {Todo_model}=require('./../models/todo');
const {users1}=require('./../models/users');

const todos=[{
  _id:new ObjectId(),
  text:'First test todo'
},{
  _id:new ObjectId(),
  text:'second test todo'
}];

beforeEach((done)=>{
  users1.remove({}).then(()=>{
    return users1.insertMany(todos);
  }).then(()=>done());
});


describe('Post /todos',()=>{
  it('Should create a new todo',(done)=>{
    var text='this is an test text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    }).end((err,res)=>{
      if(err){
      return done(err);
}
      users1.find({text}).then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
    }).catch((e)=>{
      done(e);
    });
  });

    });
// describe('POST /todos',()=>{
  it('should create one new record',(done)=>{
request(app)
.post('/todos')
.send({})
.expect(200)
.end((err,res)=>{
  if(err){
    return done(err);
  }

  users1.find().then((todos)=>{
    expect(todos.length).toBe(3);
    done();
  }).catch((e)=>done(e));
});

  });


  describe('Get Request todo',()=>{
    it('should get all get-request',(done)=>{
      request(app)
      .get('/todos')
      .expect(200)
      .expect((res)=>{
        expect(res.body.todos.length).toBe(2);

      }).end(done);
    });
  });

  describe('Get todo with id',()=>{
    it('should get result with id',(done)=>{
request(app)
.get(`/todos/${todos[0]._id.toHexString()}`)
.expect(200)
.expect((res)=>{
  expect(res.body.todo.text).toBe(todos[0].text);
}).end(done);
});

it('should return 404 error when id not found',(done)=>{
  var hexId=new ObjectId().toHexString();
  request(app)
  .get(`/todos/${hexId}`)
  .expect(404)
  .end(done);
});

 it('should return 404 error when id is not correct',(done)=>{
   request(app)
   .get('/todos/abc123')
   .expect(404)
   .end(done);
 });

});
});
