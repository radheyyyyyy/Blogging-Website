import {useEffect, useState} from "react";
import axios from "axios";
export function useBlogs(){
    const[loading,setloading]=useState(true);
    const [blogs,set]=useState([]);
    useEffect(() => {
        // @ts-ignore
        axios.get("https://backend.radheydevx.workers.dev/medium/ver1/blog/bulk",{
            headers:{Authorization:localStorage.getItem("token")}
        }).then(res=>{
            set(res.data.blogs);
            setloading(false);
        })
    }, []);
    return{
        loading,
            blogs
    }

}