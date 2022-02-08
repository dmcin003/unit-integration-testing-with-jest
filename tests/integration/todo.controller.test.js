const request = require('supertest');
const app = require('../../app');
const endpointUrl = "/todos/";
const newTodo = require('../mockData/new-todo.json')



describe(endpointUrl,()=>{
    it('should post a todo', async ()=>{
        
       const response = await request(app).post(endpointUrl).send(newTodo);

       expect(response.status).toBe(201);
       expect(response.title).toBe(newTodo.title);
       expect(response.body.done).toBe(newTodo.done);
    })
})