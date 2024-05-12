import {useEffect, useState} from "react";
import axios from "axios";
import {blogID} from "./Blog.tsx";
import {Appbar} from "../components/Appbar.tsx";

export function BlogId(){
    const[loading,set]=useState(true);
    const [one,setOne]=useState({
        content:"",
        title:"",
        author:{name:""}
    });
    useEffect(() => {
        axios.get(`https://backend.radheydevx.workers.dev/medium/ver1/blog/${blogID}`, {
            headers: {Authorization: localStorage.getItem("token")}
        }).then(res => {
            setOne({...one, content: res.data.blog.content, title: res.data.blog.title, author: res.data.blog.author});
            set(false);
        })
    }, []);
    if(loading){
        return (
            <div>
                <Appbar/>
            <div>
                <div role="status" className='flex justify-center mt-52'>
                    <svg aria-hidden="true"
                         className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            </div>
        )
    }
    return (
        <div>
            <Appbar/>
            <div className='grid grid-cols-12 h-screen'>
                <div className='col-span-8 px-10'>
                    <div className='font-extrabold text-4xl mt-4'>{one.title}</div>
                    <div className='mt-3 mb-3 text-gray-600'>Posted on 12th May,2024</div>
                    <div className='mt-10'>{one.content}</div>
                </div>
                <div className='col-span-4 p-5'>
                    <div className='font-semibold'>Author</div>
                    <div className='py-8'>
                        <div className='flex'>
                            <div
                                className="relative inline-flex items-center justify-center w-7 mr-2 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <span className="font-medium text-gray-600 dark:text-gray-300"></span>
                            </div>
                            <div className='font-extrabold'>{(one.author.name===null)?"Anonymous":one.author.name}</div></div>
                        <div className='text-gray-600 mt-4'>Master of mirth, purveyor of puns, and the funniest person in the world.</div>
                    </div>
            </div>
        </div>
        </div>
    )

}