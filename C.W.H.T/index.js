const express = require('express');
const path= require('path')
const app = express()
const PORT = 1234;

app.get("/",(req,res)=>{
    res.send('hello form sever')

})

app.listen(PORT ,()=>{
    console.log('listing from server ')
})