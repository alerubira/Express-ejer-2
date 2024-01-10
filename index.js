const express = require('express'); 
const greetMiddleware = require('./greet.js'); 
express() 
.use('/index', greetMiddleware({ greeting:'Hola Mundo' })) 
.listen(3000);