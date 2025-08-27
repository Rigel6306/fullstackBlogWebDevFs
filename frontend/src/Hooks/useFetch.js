import { useState } from "react";

const useFetch = () => {
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(false)
    
    const getData=async (URL)=>{
       const responce= await  fetch(URL).then((res)=>{
            return res.json()

        }).then((data)=>{
            return data
        }).catch((err)=>{
            setError(err)
        })

        return responce
    }

    return{getData,isLoading,error}
  
}
 
export default useFetch;