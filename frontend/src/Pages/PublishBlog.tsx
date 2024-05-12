import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

export function PublishBlog(){
    const navigate=useNavigate();
    const [t,setT]=useState("");
    const [h,setH]=useState("");
    return(
        <div className='w-full h-screen'>
            <div className='border-b-gray-300 border-2 px-10 flex justify-between'>
                    <div className=' m-5 font-bold text-xl'>Create your blog</div>
                <div>
                    <button className='bg-green-600 rounded-full mr-2 text-white px-5 py-2 hover:bg-green-700' onClick={async ()=>{
                       const res= await axios.post("https://backend.radheydevx.workers.dev/medium/ver1/blog",{
                           title:t,
                           content:h
                        },{headers:{Authorization:localStorage.getItem("token")}});
                        if (res.data==="Blog created successfully"){navigate("/blog")}
                        else {alert(res.data)}
                    }
                    }>Publish
                    </button>
                    <Link to={"/blog"}>
                    <button className='bg-green-600 rounded-full mr-2 text-white px-5 py-2 hover:bg-green-700'>Cancel
                    </button></Link>
                    <div
                        className=" m-4 relative inline-flex items-center justify-center w-10 mr-2 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <span className="font-medium text-gray-600 dark:text-gray-300">R</span>
                    </div>
                </div>
            </div>
            <div className='m-5'>
                <input type={'text'} placeholder={'Enter Title here'} className=' font-semibold text-4xl p-16 w-full border-2 border-black mb-5' onChange={(e)=>{setT(e.target.value)}}/>
                <input type={'text'} placeholder={'Enter content here'} className='text-xl border-black p-16 border-2 w-full font-mono h-fit' onChange={(e)=>{setH(e.target.value)}}/></div>
        </div>
    )
}