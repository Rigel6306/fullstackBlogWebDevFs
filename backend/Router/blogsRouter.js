const blogController=require('../controllers/blogController')
const express=require('express')
const router=express.Router()
router.route('/getBlogs').get(blogController.getBlogs)
module.exports=router