/* eslint-disable no-unused-vars */
'use strict';

const { server } = require('../server.js');
const supergoose = require('@code-fellows/supergoose');

const mockRequest = supergoose(server);
const base64 = require('base-64');


describe('Authentication Model',()=>{

  it('responds with 500 error when there is an error', () => {
    return mockRequest.get('/error')
      .then( results => {
        expect(results.status).toBe(500);
      });
  }); 
  it('responds with 404 error when a route is not found', () => {
    return mockRequest.get('/whateverdude')
      .then( results => {
        expect(results.status).toBe(404);
      });
  });
  // it('POST to /signup to create a new user', ()=>{
  //   let test = {'username': 'ahmadkhaleel96', 'password': 'Ahmad@$ 96'};
  //   mockRequest.post('/signup')
  //     .send(test)
  //     .then(data=>{
  //       // console.log(data.text);
  //       expect(data.text).toEqual(base64.encode(test.password));
  //     });
  // });
});

describe('Categories API Test', () => {
  it('post a new categorie item', () => {
    let obj = { name: 'Test 1 categories' };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(data => {
        let record = data.body;
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('respond properly to a get request to /api/v1/categories', () => {
    return mockRequest
      .get('/api/v1/categories')
      .then(results => {
        expect(results.status).toBe(200);
        expect(typeof results.body).toBe('object');
      });
  });
  it('get one category item', () => {
    let testObj = { name: 'Test for get one category' };
    return mockRequest.post('/api/v1/categories')
      .send(testObj)
      .then(data => {
        return mockRequest.get(`/api/v1/categories/${data.body._id}`)
          .then(data => {
            expect(data.body.name).toEqual(testObj.name);
          });
      });
  });
});
it('respond properly to a delete request to /api/v1/categories/:id', () => {
  let obj = { name: 'Test 3 categories' };
  return mockRequest
    .post('/api/v1/categories')
    .send(obj)
    .then(data => {
      return mockRequest
        .delete(`/api/v1/categories/${data.body._id}`)
        .send(obj)
        .then(results => {
          expect(results.status).toBe(200);
          expect(results.body[0]).toBe();
        });
    });
});
it('respond properly to a update request to /api/v1/categories/:id', () => {
  let obj = { name: 'Test 4 categories' };
  return mockRequest.post('/api/v1/categories')
    .send(obj)
    .then(data => {
      return mockRequest.put(`/api/v1/categories/${data.body._id}`)
        .send({ name: 'TEST IS UPDATED' })
        .then(results => {
          expect(results.status).toBe(200);
          expect(results.body.name).toEqual('TEST IS UPDATED');
        });
    });
});


describe('Middleware Tests' , () => {
  // it('responds with 404 error when a route is not found', () => {
  //   return mockRequest.get('/error')
  //     .then( results => {
  //       expect(results.status).toBe(404);
  //     });
  // });

  // it('responds with 500 error when there is an error', () => {
  //   return mockRequest.get('/error')
  //     .then( results => {
  //       expect(results.status).toBe(500);
  //     });
  // });  
});


describe('Products API', () => {
  it('respond properly to a get request to /api/v1/products', () => {
    return mockRequest
      .get('/api/v1/products')
      .then(results => {
        expect(results.status).toBe(200);
        expect(typeof results.body).toBe('object');

      });
  });
  it('post a new product item', () => {
    let testObj = { categoryName:'food',name: 'apple', price: 25, quantityInStock: 200 };
    return mockRequest.post('/api/v1/products')
      .send(testObj)
      .then(data => {
        let record = data.body;
        Object.keys(testObj).forEach(key => {
          expect(record[key]).toEqual(testObj[key]);
        });
      });
  });
  it('get one product item', () => {
    let testObj = { categoryName:'food', name: 'apple', price: 25, quantityInStock: 200 };
    return mockRequest.post('/api/v1/products')
      .send(testObj)
      .then(data => {
        return mockRequest.get(`/api/v1/products/${data.body._id}`)
          .then(data => {
            expect(data.body.name).toEqual(testObj.name);
          });
      });
  });
});

it('respond properly to a delete request to /api/v1/products/:id', () => {
  let obj = { categoryName:'food',name: 'dates', price: 125, quantityInStock: 2000 };
  return mockRequest
    .post('/api/v1/products')
    .send(obj)
    .then(data => {
      return mockRequest
        .delete(`/api/v1/products/${data.body._id}`)
        .send(obj)
        .then(results => {
          expect(results.status).toBe(200);
          expect(results.body[0]).toBe();
        });
    });
});
it('respond properly to a update request to /api/v1/products/:id', () => {
  let obj = { categoryName:'food',name: 'apple', price: 25, quantityInStock: 200 };
  return mockRequest.post('/api/v1/products')
    .send(obj)
    .then(data=>{
      return mockRequest.put(`/api/v1/products/${data.body._id}`)
        .send({ categoryName:'food',name: 'Item is UPDATED', price: 10, quantityInStock: 999})
        .then(results=>{
          expect(results.status).toBe(200);
          expect(results.body.name).toEqual('Item is UPDATED');
          expect(results.body.price).toEqual(10);
          expect(results.body.quantityInStock).toEqual(999);
        });
    });
});