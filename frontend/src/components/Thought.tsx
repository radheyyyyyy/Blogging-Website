type props={
    thought:string,
    author:string,
    prof:string
}

export function Thought({thought,author,prof}:props){
    return(<div>
        <div className='font-extrabold text-2xl'>
            <q>{thought}</q>
        </div>
        <div className=' mt-4 font-bold'>
            {author}
        </div>
            <div>
                {prof}
            </div>
    </div>
    )
}