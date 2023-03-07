require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/user/user.router')
const blogRouter = require('./api/blog/blog.router')


app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter)


const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Server running on : ${port} PORT`);
})