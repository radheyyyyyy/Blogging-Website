type props={
    author:string,
    title:string,
    content:string,
    publishedDate:string,
}


export function BlogDiv(p:props){
    return (
        <div className=' px-36 border-2 border-white p-2 border-b-gray-100 max-w-screen-md'>
            <div className='mt-4 flex mb-3'>
                <div
                    className="relative inline-flex items-center justify-center w-7 mr-2 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{p.author[0]}</span>
                </div>
                <div className='font-medium text-black mr-4'>{p.author}</div>
                <div className='text-gray-600'> &#183; &nbsp;{p.publishedDate}</div>
            </div>
            <div className='text-xl font-extrabold mb-1'>
                {p.title}
            </div>
            <div className='mb-6 font-serif mr-36'>
                {p.content.slice(0, 100) + "..."}
            </div>
            <div className='font-serif text-gray-700 mb-6'>
                {Math.ceil(p.content.length / 100) + "min read"}  . &nbsp; &nbsp; &nbsp; {"Selected for you"}
            </div>
        </div>
    )
}