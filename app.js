const express = require('express'); 
const greetMiddleware = require('./greet.js'); 
express() 
.use('/app', greetMiddleware({ greeting:'Hello world' })) 
.listen(8080); 