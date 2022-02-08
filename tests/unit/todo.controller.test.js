const todoController = require('../../controllers/todo.controller');
const TodoModel = require('../../model/todo.model');
const httpMocks = require('node-mocks-http');
const newTodo = require('../mockData/new-todo.json')


TodoModel.create = jest.fn();

let req,res,next;
beforeEach(()=>{
    
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
    
})

describe('TodoController.createTodo',()=>{
    beforeEach(()=>{

        req.body = newTodo;
    })

    it('should have a create todo function',()=>{
        expect(typeof todoController.createTodo).toBe('function');
    })

    it('should call todoModel.create',()=>{

        todoController.createTodo(req,res,next);
        expect(TodoModel.create).toBeCalledWith(newTodo);
    })

    it('should return 201 response code',()=>{
    
        todoController.createTodo(req,res,next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    })

    it('should return json body in response',()=>{
        TodoModel.create.mockReturnValue(newTodo);
        todoController.createTodo(req,res,next);
        expect(res._getJSONData()).toStrictEqual(newTodo);
    })


})