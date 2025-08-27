import useFetch from'../Hooks/useFetch'

const Blog = () => {

const{getData,isLoading,error}=useFetch()
    return (
        <>
        <p>blogs</p>
        </>



      );
}
 
export default Blog;