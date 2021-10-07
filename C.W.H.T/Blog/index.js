const express = require('express')
const path = require('path')
const app = express()
const port = 4000;

app.use(express.static(path.join(__dirname, "static")));


// want to use blog routers
app.use('/', require(path.join(__dirname,"./router/blog.js")))

app.listen(port,()=>{
    console.log("Blog app listening at port 4000")
});