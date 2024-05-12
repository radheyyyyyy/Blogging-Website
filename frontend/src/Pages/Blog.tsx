import {BlogDiv} from "../components/BlogDiv.tsx";
import {Appbar} from "../components/Appbar.tsx";
import {useBlogs} from "../hooks/useBlogs.ts";
import {Link} from "react-router-dom";
import {Skeleton} from "../components/Skeleton.tsx";
export let blogID:string;
export function Blog(){
    const {blogs,loading}=useBlogs();
    if(loading){return <div><Appbar/><div className='flex justify-center items-center'><div><Skeleton/><Skeleton/><Skeleton/><Skeleton/></div></div></div>}
    else {
        console.log(blogs)
        return(
        <div>
            <Appbar/>
        <div className='flex w-full justify-center'>
            <div>
            {blogs.map(blog=>{ // @ts-ignore
                return(<Link onClick={()=>{blogID=blog.id}} to={`/blog/${blog.id}`}><BlogDiv author={blog.author.name===null?"Anonymous":blog.author.name} title={blog.title} content={blog.content} publishedDate={"6th june"}/></Link>)})}
            </div>
        </div>
        </div>
            )
}}