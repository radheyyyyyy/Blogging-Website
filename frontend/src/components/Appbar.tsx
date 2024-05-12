import {Link} from "react-router-dom";

export function Appbar(){
    return(
        <div className='border-b-gray-300 border-2 px-10 flex justify-between'>
            <Link to={'/blog'}><div className=' m-5 text-lg font-semibold'>Medium</div></Link>
            <div>
                <Link to={'/blog/publish'}> <button className='bg-green-600 rounded-full mr-2 text-white px-5 py-2 hover:bg-green-700'>New</button></Link>
               <Link to={'/signin'} onClick={()=>{localStorage.clear()}}><div
                    className=" m-4 relative inline-flex items-center justify-center w-10 mr-2 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium  text-gray-600 dark:text-gray-300">A</span>
                </div></Link>
            </div>
        </div>
    )
}