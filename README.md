# LAB - Class 15

## Authenticated API Server 

### Author: Ahmad K. Al-Mahasneh

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-AhmadK/authenticated-api-server/pull/1)
- [ci/cd](https://github.com/401-advanced-javascript-AhmadK/authenticated-api-server/actions) (GitHub Actions)

#### `.env` requirements
- `PORT` - 3000
- `MONGODB_URI` - mongodb://localhost:27017/lab11db 
- `SECRET` - 'ahmadShakespeare'
- `CLIENT_ID` - 422f8f92016cf9c60a6c  
- `API_SERVER` - http://localhost:3000/oauth



#### How to initialize/run your application (where applicable)

- `npm run start`

#### Tests

- How do you run tests?
  npm run test
- Any tests of note?
  supertest supergoose jest --verbose --coverage
  - Any tests passed? 
   No

#### Worked as a group
  - Ahmad K. Al-Mahasneh
  - Qusai A. Al-Hanaktah
  - Mohammad S. Al-Hawamdeh
  - Ayman J. Al-Khawaldeh

#### UML

![authenticated-api-server](assets/authenticated-api-server.jpg)