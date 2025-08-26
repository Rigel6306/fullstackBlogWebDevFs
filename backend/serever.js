const express= require ('express')
const cors =require('cors')
const blogRouter=require('./Router/blogsRouter')

const app=express()




app.listen(4000,()=>{
    console.log("server running on port 4000")
})