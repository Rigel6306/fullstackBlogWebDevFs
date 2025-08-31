const data=require('../models/dataModel')

const blogs= new data()

exports.getBlogs=async(req,res)=>{
    blogs.getBlogData().then((resolvedData)=>{
        console.log("controller fired",resolvedData)
        res.json(resolvedData)
    

    }).catch((err)=>{
        console.log("Error from controller",err)
    })
    
}