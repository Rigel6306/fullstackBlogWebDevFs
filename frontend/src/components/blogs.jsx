import { useEffect, useState } from 'react'
import useFetch from'../Hooks/useFetch'

const Blog = () => {

const{getData,isLoading,error}=useFetch()
const[data,setData]=useState([])

useEffect(()=>{

getData('http://localhost:4000/blogs/getBlogs').then((res)=>{
  setData(res)
})
},[])
console.log(data)

    return (
        <>
        <p>blogs</p>
        {
        isLoading?<p>Loading</p>:data.map((item,index)=>(
          <div key={index}>
            <h3>{item.id}</h3>
            <h3>{item.author}</h3>
            <h3>{item.blogContent}</h3>
            <h3>{item.date}</h3>
          </div>
        ))
        }
        </>



      );
}
 
export default Blog;