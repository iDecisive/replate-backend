//Imports

const express = require('express');
const userRouter = require('./authRoutes/userRouter');

//Vars

const server = express();

const PORT = 8000;

//Middleware

server.use(express.json());
server.use('/', userRouter);

//Start server

server.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});