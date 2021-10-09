// create a basic server with the help of express

const express = require('express');
const app = express();
const port = 8900;

app.get('/',(req,res)=>{
    res.send('<h1>Welcome form home page</h1>')
});

app.get('/about',(req,res)=>{
    res.send('<h1>Welcome From about page</h1>');
});


// now adding status code 
app.get('/thank',(req,res)=>{
    res.status(200).send('<h1>Thank you form wisiting</h1>');
})

// now adding 404 error page
app.get('/*',(req,res)=>{
    res.status(404).send('<h1>please check your url 404 error </h1>')
});

app.listen(port, ()=>{
    console.log('listening form port 8900')
})