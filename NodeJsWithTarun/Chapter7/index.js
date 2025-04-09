const express = require('express');
const { connectMongoDB } = require('./connection');
const { logReqRes } = require('./Middlewares');
const userRouter = require('./Routes/User');
const app = express();
const PORT = 8000;

//Connection
connectMongoDB('mongodb://127.0.0.1:27017/tarun-app-1').then(() => {
	console.log("mongodb Connected")
});

//Middleware -plugin
//it is used for whenever any form data comes this will put that data into body 
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('Log.txt'));

//Routes 
app.use("/api/users", userRouter);

//==============================================================

app.listen(PORT, () => console.log('Server started at Port 8000'))