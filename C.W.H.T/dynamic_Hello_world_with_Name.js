const express = require('express')
const app = express()
// search in browsr
// http://localhost:4444/a/Prajwal
app.get('/a/:name',(req,res)=>{
    res.send('Hello '+req.params.name)
})

app.listen(4444,(err)=>{

console.log('listing from 4444')
})