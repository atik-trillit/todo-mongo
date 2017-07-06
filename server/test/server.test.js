const expect=require('expect');
const request=require('supertest');

const {app}=require('./../server');
// const {Todo_model}=require('./../models/todo');
const {users1}=require('./../models/users');

beforeEach((done)=>{
  users1.remove({}).then(()=>done());
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
      users1.find().then((todos)=>{
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
.expect(400)
.end((err,res)=>{
  if(err){
    return done(err);
  }

  users1.find().then((todos)=>{
    expect(todos.length).toBe(0);
    done();
  }).catch((e)=>done(e));
});

  });
});
