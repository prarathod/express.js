const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogs.js')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/index.html"))
})
router.get('/blogs',(req,res)=>{

    res.sendFile(path.join(__dirname,"../templates/bloghome.html"))
})

router.get('/blogpost/:slug',(req,res)=>{
    // myBlog = blogs.filter((e) => {
    //     return e.slug == req.params.slug
    // })
    console.log(req.params)

    res.sendfile(path.join(__dirname,'../templates/blogpage.html'))
})


module.exports = router